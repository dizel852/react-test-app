import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import ItemTypes from './ItemTypes';
import { ListGroup, Button } from 'react-bootstrap';

const style = {
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  position: 'relative'
}
const btnStyle = {
  position: 'absolute',
  right: '4px',
  bottom: '5px'
}

const Card = ({ id, text, index, moveCard, deleteCard }) => {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  });
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id, index },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <ListGroup.Item ref={ref} style={{...style, opacity }}>
      {text}
      <Button style={btnStyle} onClick={() => deleteCard(index)} variant="outline-danger float-right btnStyle" size="sm" >Delete</Button>
    </ListGroup.Item>
  );
};
export default Card;

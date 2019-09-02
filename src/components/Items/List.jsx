import React from 'react';
import RLDD from 'react-list-drag-and-drop/lib/RLDD';
import { ListGroup } from 'react-bootstrap';

export const List = ({ items, updateState }) => {
  
  return (
    <React.Fragment>
      <ListGroup>
        <RLDD
          items={items}
          itemRenderer={item => (
            <ListGroup.Item key={item.id}>{item.title}</ListGroup.Item>
          )}
          onChange={updateState}
        />
      </ListGroup>
    </React.Fragment>
  );
};

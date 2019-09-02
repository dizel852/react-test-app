import React, { useState, useCallback, useEffect } from 'react';
import Card from './Card';
import update from 'immutability-helper';
import { PaginationBar } from '../Pagination/Pagination';
import { generateRandomItems } from '../../helpers/items';
import { ListGroup } from 'react-bootstrap';

export const List = () => {
  {
    const [cards, setCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage] = useState(10);
    
    // Get visible 
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
      const res = generateRandomItems(100, 5);
      setCards(res);
    }, []);

    const moveCard = useCallback(
      (dragIndex, hoverIndex) => {
        const dragCard = cards[dragIndex];
        setCards(
          update(cards, {
            $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
          })
        );
      },
      [cards]
    );

    const renderCard = (card, index) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        />
      );
    };

    const renderList = () => {
      let arr = [];
      for (let i = indexOfFirstCard; i < indexOfLastCard; i++) {
        if (cards[i]) {
          arr.push(renderCard(cards[i], i));
        }
      }
      return arr;
    };

    return (
      <React.Fragment>
        <ListGroup>{renderList()}</ListGroup>
        <PaginationBar
          cardsPerPage={cardsPerPage}
          totalCards={cards.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </React.Fragment>
    );
  }
};

import React, { useState, useCallback, useEffect } from 'react';
import Card from './Card';
import update from 'immutability-helper';
import { generateRandomItems, generateId } from '../../helpers/items';
import { ListGroup } from 'react-bootstrap';
import { saveToStorage, getFromStorage } from '../../helpers/storage.js';

import { PaginationBar } from '../Pagination/Pagination';
import { AddCard } from './AddCard';

export const List = () => {
  {
    const [cards, setCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [editableCardId, setEditableCardId] = useState(-1);
    const [cardsPerPage] = useState(10);

    // Get visible
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect(() => {
      let cards = getFromStorage('cards');
      if (!cards || !cards.length) {
        cards = generateRandomItems(100, 5);
        saveToStorage('cards', cards);
      }
      setCards(cards);
    }, []);

    const moveCard = useCallback(
      (dragIndex, hoverIndex) => {
        const dragCard = cards[dragIndex];
        const updatedCards = update(cards, {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
        });
        setCards(updatedCards);
        saveToStorage('cards', updatedCards);
      },
      [cards]
    );
    const deleteCard = useCallback(
      index => {
        const updatedCards = update(cards, {
          $splice: [[index, 1]]
        });
        setCards(updatedCards);
        saveToStorage('cards', updatedCards);
      },
      [cards]
    );
    const addCard = useCallback(
      cardName => {
        const newCard = {
          text: cardName,
          id: generateId()
        };
        const newCards = [newCard, ...cards];
        setEditableCardId(-1);
        setCards(newCards);
        saveToStorage('cards', newCards);
      },
      [cards]
    );
    
    const doubleClick = useCallback(
      cardId => {
        setEditableCardId(cardId)
      }, []
    )

    const saveCard = useCallback(
      (index, newText) => {
        const updatedCard = {...cards[index], text: newText};
        const updatedCards = update(cards, {
          $splice: [[index, 1, updatedCard]]
        });
        setEditableCardId(-1);
        setCards(updatedCards);
        saveToStorage('cards', updatedCards);

      }, [cards]
    )

    const renderCard = (card, index) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
          deleteCard={deleteCard}
          editCard={doubleClick}
          saveCard={saveCard}
          editableCardId={editableCardId}
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
        <AddCard addCard={addCard} />
      </React.Fragment>
    );
  }
};

import React from 'react';
import { Pagination } from 'react-bootstrap';

export const PaginationBar = ({
  cardsPerPage,
  totalCards,
  paginate,
  currentPage
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      {pageNumbers.map(number => (
        <Pagination.Item
          key={number}
          onClick={() => paginate(number)}
          active={number === currentPage}
        >
          {number}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

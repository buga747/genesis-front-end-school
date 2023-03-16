import React from 'react';
import { Button, PageNumber, PaginationContainer } from './Pagination.styled';

export default function Pagination({
  setNextPage,
  setPrevPage,
  currentPage,
  totalPages,
  setCurrentPage,
}) {
  const pageNumbers = [];
  for (let i = 0; i < totalPages; i += 1) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <PaginationContainer>
        <Button onClick={setPrevPage} disabled={currentPage === 0}>
          Prev
        </Button>
        {pageNumbers.map(pageNumber => (
          <PageNumber
            key={pageNumber}
            current={currentPage === pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
          >
            {pageNumber + 1}
          </PageNumber>
        ))}
        <Button onClick={setNextPage} disabled={currentPage === totalPages - 1}>
          Next
        </Button>
      </PaginationContainer>
    </div>
  );
}

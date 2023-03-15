import { useState } from 'react';
import PropTypes from 'prop-types';
import CourseListItem from 'components/CourseListItem';
import {
  Button,
  List,
  PageNumber,
  PaginationContainer,
} from './CoursesList.styled';

function CoursesList({ courses }) {
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(courses.length / itemsPerPage);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, courses.length);
  const currentItems = courses.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const pageNumbers = [];
  for (let i = 0; i < totalPages; i += 1) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <List>
        {currentItems.map(item => {
          return <CourseListItem key={item.id} course={item} />;
        })}
      </List>
      <PaginationContainer>
        <Button onClick={handlePrevPage} disabled={currentPage === 0}>
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
        <Button
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </Button>
      </PaginationContainer>
    </div>
  );
}

CoursesList.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default CoursesList;

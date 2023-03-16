import CoursesList from 'components/CoursesList/CoursesList';
import MainTitle from 'components/MainTitle/MainTitle';
import Pagination from 'components/Pagination';
import React, { useEffect, useState } from 'react';
import { getCourses } from 'services/coursesApi';
import { useLocation } from 'react-router-dom';

export default function Course() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const location = useLocation();

  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const fetchedCourses = await getCourses();
        setCourses(fetchedCourses);
      } catch (e) {
        setError('Error fetching courses');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(location?.search);
    const pageParam = Number(urlParams.get('page'));
    if (pageParam && !isNaN(pageParam)) {
      setCurrentPage(pageParam - 1);
    }
  }, [location]);

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

  useEffect(() => {
    const url = new URL(window.location.href);
    url.searchParams.set('page', String(currentPage + 1));
    window.history.pushState({}, '', url.toString());
  }, [currentPage]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <MainTitle title="Courses" />
      <CoursesList courses={currentItems} />
      <Pagination
        setNextPage={handleNextPage}
        currentPage={currentPage}
        setPrevPage={handlePrevPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

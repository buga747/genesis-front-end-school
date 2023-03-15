import CoursesList from 'components/CoursesList/CoursesList';
import MainTitle from 'components/MainTitle/MainTitle';
import React, { useEffect, useState } from 'react';
import { getCourses } from 'services/coursesApi';

export default function Course() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const fetchedCourses = await getCourses();
        console.log(fetchedCourses);
        setCourses(fetchedCourses);
      } catch (e) {
        setError('Error fetching courses');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <MainTitle title="Courses" />
      <CoursesList courses={courses} />
    </div>
  );
}

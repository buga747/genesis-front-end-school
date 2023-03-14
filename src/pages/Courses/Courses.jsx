import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
      <h1>List of Courses</h1>
      <ul>
        {courses.map(({ previewImageLink, id, title }) => (
          <Link key={id} to={`/course/${id}`}>
            <li>
              <img
                style={{
                  height: '240px',
                  objectFit: 'cover',
                  // width: 'auto',
                }}
                src={previewImageLink + '/cover.webp'}
                alt=""
              />
              <p> {title}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

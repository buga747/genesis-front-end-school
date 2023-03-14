import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseById } from 'services/coursesApi';

export default function Course() {
  const [course, setCourse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { courseId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const fetchedCourse = await getCourseById(courseId);
        console.log(fetchedCourse);
        setCourse(fetchedCourse);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [courseId]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!course) {
    return null;
  }

  return (
    <div>
      <p>{course.title}</p>
      <video
        width="500"
        autoPlay
        controls
        poster={`${course.previewImageLink}/cover.webp`}
        src={course.meta.courseVideoPreview?.link}
      ></video>
    </div>
  );
}

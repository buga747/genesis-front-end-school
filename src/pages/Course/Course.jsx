import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
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
        src={
          'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        }
        // src={meta.courseVideoPreview?.link}
      >
        <source src={course.meta.courseVideoPreview?.link} type="video/mp4" />
        <source src={course.meta.courseVideoPreview?.link} type="video/m3u" />
        <source src={course.meta.courseVideoPreview?.link} type="video/ogg" />
      </video>
    </div>
  );
}

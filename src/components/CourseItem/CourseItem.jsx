import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  StyledBackButton,
  StyledCourseItemContainer,
  StyledLessonsUl,
  StyledVideoWrapper,
} from './CourseItem.styled';

// define a styled back button

export default function CourseItem({
  course: {
    duration,
    rating,
    description,
    title,
    previewImageLink,
    meta,
    lessonsCount,
    lessons,
  },
}) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    // Check if we came from a page URL param and add it to the redirect URL if present
    const page = new URLSearchParams(location.search).get('page');
    navigate(location.state?.from ?? '/', { replace: true, state: { page } });
  };

  const [currentLesson, setCurrentLesson] = useState(null);

  const handleLessonClick = lesson => {
    if (!lesson.locked) {
      setCurrentLesson(lesson);
    }
  };

  return (
    <StyledCourseItemContainer>
      <StyledBackButton onClick={handleGoBack}>Go back</StyledBackButton>

      {/* show course details */}
      <h1>{title}</h1>
      <img src={`${previewImageLink}/cover.webp`} alt={title} />
      <div>
        <h2>Course details</h2>
        <p>Duration: {duration} minutes</p>
        <p>Rating: {rating} out of 5 stars</p>
        <p>Description: {description}</p>

        <div>
          <p>You will receive such skills:</p>
          {meta?.skills ? (
            <ul>
              {meta.skills.map((skill, idx) => {
                return <li key={idx}>{skill}</li>;
              })}
            </ul>
          ) : (
            <p>Sorry, no information about skills</p>
          )}
        </div>
      </div>

      {/* show lessons list */}
      <div>
        <p>Course lessons:</p>
        <StyledLessonsUl>
          {lessons.map(lesson => (
            <li
              key={lesson.id}
              style={{
                textDecoration: lesson.locked ? 'line-through' : 'none',
              }}
              onClick={() => handleLessonClick(lesson)}
            >
              {lesson.title}
              {lesson.locked && ' (Locked)'}
            </li>
          ))}
        </StyledLessonsUl>
      </div>

      {/* show current video lesson */}
      {currentLesson && (
        <StyledVideoWrapper>
          <video
            autoPlay
            controls
            poster={`${previewImageLink}/cover.webp`}
            src={currentLesson.link}
          ></video>
          <p>{currentLesson.title}</p>
          <button onClick={() => setCurrentLesson(null)}>Close</button>
        </StyledVideoWrapper>
      )}
    </StyledCourseItemContainer>
  );
}

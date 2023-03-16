import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  CourseDetails,
  CourseImage,
  List,
  ListItem,
  PhotoWrapper,
} from './CourseListItem.styled';

export default function CourseListItem({ course }) {
  const [hovered, setHovered] = useState(false);
  const location = useLocation();

  const {
    id,
    title,
    previewImageLink,
    lessonsCount,
    rating,
    meta: { courseVideoPreview, skills },
  } = course;
  const hasVideo = courseVideoPreview && courseVideoPreview.link !== undefined;

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  const currentPage = new URLSearchParams(location.search).get('page');

  return (
    <>
      <ListItem>
        <PhotoWrapper onMouseEnter={handleHover} onMouseLeave={handleLeave}>
          {hovered && hasVideo ? (
            <video
              style={{ width: '100%', height: 'auto' }}
              autoPlay
              controls
              poster={`${previewImageLink}/cover.webp`}
              src={courseVideoPreview?.link}
            ></video>
          ) : (
            <CourseImage
              style={{ width: '100%', height: 'auto' }}
              src={`${previewImageLink}/cover.webp`}
              alt="title"
            />
          )}
        </PhotoWrapper>
        <CourseDetails>
          <List
            to={{
              pathname: `/course/${id}`,
              state: { from: location, page: currentPage },
            }}
          >
            <h2>Course name: {title}</h2>
          </List>

          <p>Lessons: {lessonsCount}</p>
          <p>Course rating: {rating}</p>
          <div>
            <p> Skills:</p>
            {skills ? (
              <ul>
                {skills.map((skill, idx) => {
                  return <li key={idx}>{skill}</li>;
                })}
              </ul>
            ) : (
              <p>Sorry, no information about skills</p>
            )}
          </div>
        </CourseDetails>
      </ListItem>
    </>
  );
}

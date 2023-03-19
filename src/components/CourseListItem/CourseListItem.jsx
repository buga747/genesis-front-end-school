import React, { useEffect, useRef, useState } from 'react';
import * as Hls from 'hls.js';
import { useLocation, Link } from 'react-router-dom';
import {
  CourseDetails,
  CourseImage,
  ListItem,
  PhotoWrapper,
} from './CourseListItem.styled';

export default function CourseListItem({ course }) {
  const [hovered, setHovered] = useState(false);
  const [videoSrc, setVideoSrc] = useState(null); // store video source link
  const location = useLocation();
  const videoEl = useRef(null); // ref to the video element

  const {
    id,
    title,
    previewImageLink,
    lessonsCount,
    rating,
    meta: { courseVideoPreview, skills },
  } = course;

  const hasVideo = courseVideoPreview && courseVideoPreview.link !== undefined;

  useEffect(() => {
    if (!courseVideoPreview) {
      return;
    }

    if (hasVideo) {
      const hls = new Hls(); // create a new instance of hls.js player
      hls.loadSource(courseVideoPreview.link); // load video source using HLS protocol
      hls.attachMedia(videoEl.current); // attach video to the HTML5 video element via ref
      setVideoSrc(courseVideoPreview.link); // update state to store the source link
      return () => {
        if (hls) {
          hls.destroy(); // clean up the instance when unmounting
        }
      };
    }
  }, [courseVideoPreview, hasVideo]);

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
              src={videoSrc}
              ref={videoEl} // pass the ref to the video element
            ></video>
          ) : (
            <CourseImage
              style={{ width: '100%', height: 'auto' }}
              src={`${previewImageLink}/cover.webp`}
              alt="title"
            />
          )}
        </PhotoWrapper>{' '}
        <CourseDetails>
          <Link
            to={{
              pathname: `/course/${id}`,
              state: { from: location, page: currentPage },
            }}
          >
            <h2>Course name: {title}</h2>
          </Link>
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

import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.div`
  margin: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  padding: 10px;
  text-decoration: none;
  width: 520px;
`;

export const PhotoWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 500px;
  height: 300px;

  video,
  img {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &:hover .course-title {
    opacity: 1;
  }
`;

export const CourseImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CourseTitle = styled.p`
  color: white;
  text-shadow: 2px 2px rgba(0, 0, 0, 0.3);
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  opacity: 0;
  transition: all 0.5s ease-in-out;
`;

export const CourseDetails = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    font-size: 18px;
    font-weight: 400;
    margin-right: 20px;
  }

  ul {
    display: flex;
    justify-content: center;
    list-style-type: none;
    margin-bottom: 0.6rem;
    padding: 0;
    flex-wrap: wrap;
  }

  li {
    display: inline-block;
    font-size: 18px;

    text-align: center;
    text-decoration: none;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 1rem;
    background-color: #2196f3;
    color: white;
    cursor: pointer;
  }
`;

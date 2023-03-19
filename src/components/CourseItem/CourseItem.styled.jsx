import styled from 'styled-components';

// define a styled back button
export const StyledBackButton = styled.button`
  background-color: #ffffff;
  color: #b06c6b;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const StyledLessonsUl = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledVideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 1rem;
  margin-top: 1rem;

  video {
    max-width: 100%;
  }

  p {
    font-size: 1.5rem;
    margin: 0;
    margin-top: 0.5rem;
  }

  button {
    background-color: #b06c6b;
    color: #ffffff;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    margin-top: 1rem;
    cursor: pointer;
    font-weight: bold;
  }
`;

export const StyledCourseItemContainer = styled.div`
  background-color: #fff5ee;
  padding: 2rem;
  font-family: Arial;

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1.2rem;
  }

  ul {
    list-style-position: inside;
  }

  li {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    text-decoration-color: #9e9e9e;
    text-decoration-line: ${({ locked }) => (locked ? 'line-through' : 'none')};
    color: ${({ locked }) => (locked ? '#9e9e9e' : 'inherit')};
  }
`;

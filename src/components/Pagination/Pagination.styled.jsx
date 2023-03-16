import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Button = styled.button`
  margin: 0 4px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #27ae60;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const PageNumber = styled.button`
  margin: 0 5px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: ${props => (props.current ? '#277aae' : '#27ae60')};
  color: #fff;
  cursor: pointer;
  transition: background-color 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

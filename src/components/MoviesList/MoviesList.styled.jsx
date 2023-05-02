import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

export const MovieItem = styled.li`
  flex-basis: calc((100% - 100px) / 5);
  max-height: 100%;
  min-height: 390px;
  border-radius: 8px;
  overflow: hidden;
`;

export const MovieLink = styled(Link)`
  object-fit: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const MovieImg = styled.img`
  margin-bottom: 5px;
  transition: all 200ms ease-in-out;
`;

export const MovieTitle = styled.p`
  height: 100%;
  padding: 10px 8px;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  transition: all 200ms ease-in-out;
`;

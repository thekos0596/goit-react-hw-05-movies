import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AdditionalInfo = styled(NavLink)`
  display: inline-block;
  padding: 8px 14px;
  font-weight: 500;
  font-size: 18px;
  border-radius: 4px;
  border: none;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  &.active {
    color: blue;
  }
  :hover,
  :focus-visible {
    color: tomato;
  }
`;

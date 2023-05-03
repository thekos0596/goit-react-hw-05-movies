import styled from '@emotion/styled';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ReviewsItem = styled.li``;

export const ReviewsAuthor = styled.p`
  margin-bottom: 8px;
  font-size: 22px;

  :first-letter {
    text-transform: uppercase;
  }
`;

export const ReviewsText = styled.p`
  font-size: 16px;
  color: 212121;
  line-height: 1.5;
`;

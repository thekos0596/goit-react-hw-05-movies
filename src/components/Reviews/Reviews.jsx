import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReview } from 'services/fetchMovie';
import {
  ReviewsList,
  ReviewsItem,
  ReviewsAuthor,
  ReviewsText,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReview(movieId).then(setReviews);
  }, [movieId]);

  if (!reviews) {
    return;
  }

  return (
    <ReviewsList>
      {reviews.length === 0 && <p>We don't have any reviews for this movie</p>}

      {reviews.map(({ id, author, content }) => (
        <ReviewsItem key={id}>
          <ReviewsAuthor>{author}</ReviewsAuthor>
          <ReviewsText>{content}</ReviewsText>
        </ReviewsItem>
      ))}
    </ReviewsList>
  );
};

export default Reviews;

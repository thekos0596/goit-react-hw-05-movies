import MovieCard from 'components/MovieCard/MovieCard';
import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'services/fetchMovie';
import { AdditionalInfo } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId).then(setMovieDetails);
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }

  return (
    <>
      <MovieCard movie={movieDetails} />
      <AdditionalInfo to={'cast'}>Cast</AdditionalInfo>
      <AdditionalInfo to={'reviews'}>Reviews</AdditionalInfo>
      <Outlet />
    </>
  );
};

export default MovieDetails;

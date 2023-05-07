import MovieCard from 'components/MovieCard/MovieCard';
import { useEffect, useState, useRef } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'services/fetchMovie';
import { BtnBack, AdditionalInfo } from './MovieDetails.styled';
import { useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getMovieDetails(movieId).then(setMovieDetails);
  }, [movieId]);

  if (!movieDetails) {
    return null;
  }

  return (
    <>
      <BtnBack to={backLinkLocationRef.current}>Go Back</BtnBack>
      <MovieCard movie={movieDetails} />
      <AdditionalInfo to={'cast'}>Cast</AdditionalInfo>
      <AdditionalInfo to={'reviews'}>Reviews</AdditionalInfo>
      <Outlet />
    </>
  );
};

export default MovieDetails;

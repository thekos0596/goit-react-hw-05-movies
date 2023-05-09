import MovieCard from 'components/MovieCard/MovieCard';
import { useEffect, useState, useRef, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'services/fetchMovie';
import { BtnBack, AdditionalInfo } from './MovieDetails.styled';

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
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;

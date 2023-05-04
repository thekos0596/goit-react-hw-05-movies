import { useLocation } from 'react-router-dom';
import {
  MovieList,
  MovieItem,
  MovieLink,
  MovieImg,
  MovieTitle,
} from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  const location = useLocation();

  return (
    <>
      <MovieList>
        {movies.map(({ id, title, poster_path, original_name }) => (
          <MovieItem key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
              <MovieImg src={imageBaseUrl.concat(poster_path)} alt="" />
              <MovieTitle>{title ?? original_name}</MovieTitle>
            </MovieLink>
          </MovieItem>
        ))}
      </MovieList>
    </>
  );
};

import {
  MovieList,
  MovieItem,
  MovieLink,
  MovieImg,
  MovieTitle,
} from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  return (
    <>
      <MovieList>
        {movies.map(({ id, title, poster_path }) => (
          <MovieItem key={id}>
            <MovieLink to={`/movies/${id}`}>
              <MovieImg src={imageBaseUrl.concat(poster_path)} alt="" />
              <MovieTitle>{title}</MovieTitle>
            </MovieLink>
          </MovieItem>
        ))}
      </MovieList>
    </>
  );
};

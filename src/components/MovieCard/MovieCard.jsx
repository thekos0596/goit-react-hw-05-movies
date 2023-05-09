import PropTypes from 'prop-types';
import { MovieCardWrapper } from './MovieCard.styled';

const MovieCard = ({ movie }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  const imgUrl = imgBaseUrl.concat(poster_path);
  const realeseDate = release_date.slice(0, 4);
  const percentage = vote_average.toFixed(1);
  const genresList = genres.map(genre => genre.name).join(' ');

  return (
    <MovieCardWrapper>
      <img src={imgUrl} alt={title} width="300" />
      <div>
        <h2>
          {title} <span>({realeseDate})</span>
        </h2>
        <p>
          User Score:
          <span>{percentage}</span>
        </p>
        <p>
          Overview:
          <span>{overview}</span>
        </p>
        <p>
          Genres:
          <span>{genresList}</span>
        </p>
      </div>
    </MovieCardWrapper>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.object),
  }),
};

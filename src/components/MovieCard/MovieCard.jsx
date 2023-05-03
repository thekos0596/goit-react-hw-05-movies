const MovieCard = ({ movie }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  const imgUrl = imgBaseUrl.concat(poster_path);
  const realeseDate = release_date.slice(0, 4);
  const percentage = vote_average.toFixed(1);
  const genresList = genres.map(genre => genre.name).join(' ');

  return (
    <div>
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
    </div>
  );
};

export default MovieCard;

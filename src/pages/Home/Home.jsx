import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/fetchMovie';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <MoviesList movies={movies} />
    </>
  );
};

export default Home;

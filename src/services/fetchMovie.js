import axios from 'axios';

const searchParams = new URLSearchParams({
  api_key: 'afc0fa936a8cd405bc4147ee7afbe2a0',
  language: 'en-US',
  include_adult: false,
});

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(`trending/all/week?${searchParams}`);

  return data.results;
};

export const getMovieDetails = async id => {
  const { data } = await axios.get(`movie/${id}?${searchParams}`);

  return data;
};

export const getMovieCredits = async id => {
  const { data } = await axios.get(`movie/${id}/credits?${searchParams}`);

  return data.cast;
};

export const getMovieReview = async id => {
  const { data } = await axios.get(`movie/${id}/reviews?${searchParams}`);

  return data.results;
};
export const getMovieByName = async name => {
  const { data } = await axios.get(
    `/search/movie?${searchParams}&query=${name}`
  );

  return data.results;
};

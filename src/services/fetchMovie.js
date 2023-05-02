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

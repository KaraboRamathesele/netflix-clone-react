const API_KEY = "cdf6b3c8ddf4c3eea126d6a055b21dcc";

const requests = {
  fetchTrending: `/trending/all/week?api_keys=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_keys=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumnetaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;

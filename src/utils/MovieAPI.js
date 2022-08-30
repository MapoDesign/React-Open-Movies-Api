const APIKEY = '4cb9def9';
const APIURL = 'https://www.omdbapi.com/';

const fetchMovies = async (search='The+godfather') => {
  if (search.length < 3) {
    return;
  }
  const response = await fetch(APIURL + '?apikey=' + APIKEY + '&s=' + search)
  .then(res => res.json());
  const {Error, Search:movies, totalResults: totalCount} = response;
  
  return { movies, totalCount, Error: Error ?? '' };
}

const fetchMoviesById = async (movieId) => {
  const response = await fetch(APIURL + '?apikey=' + APIKEY + '&i=' + movieId)
  .then(res => res.json());
  return response
}

export {fetchMovies,fetchMoviesById,APIKEY,APIURL}
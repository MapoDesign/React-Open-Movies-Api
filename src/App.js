
import { useEffect, useState } from 'react';
import './App.css';
import Modal from './Components/Modal';
import MoviesList from './Components/MovieList';
import NavBar from './Components/NavBar';
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


function App() {
  const [movies,setMovies] = useState([]);
  const [totalCount,setTotalCount] = useState(0);
  const [error, setError] = useState('');
  const [errorDetail, setErrorDetail] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null)

  const callApi = async (search='') => {
    const data = await fetchMovies(search);
    console.log(data);
    setError(data.Error);
    if (!data.Error.length) {
      setMovies(data.movies);
      setTotalCount(data.totalCount);
    } else {
      setTotalCount(0);
      setMovies([]);
    }

    
     
  }

  const selectMovie = async (movie) => {
    const newMovie = await fetchMoviesById(movie.imdbID);
    if (newMovie.Error) {
      setErrorDetail(newMovie.Error);
      setSelectedMovie(null)
    } else {
      setSelectedMovie(newMovie);
    }
  }

  useEffect(()=>{
    
    callApi('The+lord+of+rings');
    return() => {
    }
  },[]);

  return (
    <div className="App">
      <NavBar onSearchChange={callApi} />
      <header className="App-header">
        <section className='container'>
          <h1>Open Movies Database ({totalCount})</h1>
          
        </section>
      {
            !error ? <MoviesList movies={movies} onSelectedMovie={selectMovie} /> : <h2>{error}</h2>
      }  
      </header>
      <Modal error={errorDetail} movie={selectedMovie} />
       
    </div>
  );
}

export default App;


import { useEffect, useState } from 'react';
import './App.css';
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
  const {Error, Search:movies, totalResult: totalCount} = response;
  
  return{movies,totalCount,Error:Error ?? ''};
}

function App() {
  const [movies,setMovies] = useState([]);
  const [totalCount,setTotalCount] = useState(0);
  const [error, setError] = useState('');

  const callApi = async (search='') => {
    const data = await fetchMovies(search);
    console.log(data.Error);
    if (!data.Error.length) {
      setMovies(data.movies);
      setTotalCount(data.totalCount);
    } else {
      setTotalCount(0);
      setMovies([]);
      setError(data.error)
    }
     
  }

  useEffect(()=>{
    
    callApi('Godfather');
    return() => {
    }
  },[]);

  return (
    <div className="App">
      <NavBar onSearchChange={callApi} />
      <header className="App-header">
        <section className='container'>
          <h1>Open Movies Database {totalCount}</h1>
          {
            !error ? <MoviesList movies={movies} /> : <h2>{error}</h2>
          }
        </section>
        
      </header>
    </div>
  );
}

export default App;

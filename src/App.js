
import { useEffect, useState } from 'react';
import './App.css';
import MoviesList from './Components/MovieList';
const APIKEY = '4cb9def9';
const APIURL = 'https://www.omdbapi.com/';

const fetchMovies = async (search='The+godfather') => {
  const response = await fetch(APIURL + '?apikey=' + APIKEY + '&s=' + search)
  .then(res => res.json());
  const {Search:movies} = response;
  console.log(response);
  return{movies}
}

function App() {
  const [movies,setMovies] = useState([]);

  useEffect(()=>{
    const callApi = async () => {
      const data = await fetchMovies();
      setMovies(data.movies);
    }
    callApi();
    return() => {
    }
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <section className='container'>
          <h1>Open Movies Database</h1>
          <MoviesList movies={movies} />
        </section>
        
      </header>
    </div>
  );
}

export default App;

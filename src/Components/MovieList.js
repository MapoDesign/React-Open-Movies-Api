import MovieItem from "./MovieItem"

const MoviesList = ({movies, onSelectedMovie}) => {
    return (
        <div className="row justify-content-center">
            {
                movies.map(movie => <MovieItem key={movie.imdbID} movie={movie} onSelectedMovie={onSelectedMovie} />)
            }
            
        </div>
    )
    
}

export default MoviesList
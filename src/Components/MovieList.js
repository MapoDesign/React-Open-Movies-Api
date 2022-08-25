import MovieItem from "./MovieItem"

const MoviesList = ({movies}) => {
    return (
        <div className="row">
            {
                movies.map(movie => <MovieItem movie={movie} />)
            }
            
        </div>
    )
    
}

export default MoviesList
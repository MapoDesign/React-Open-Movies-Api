import MovieItem from "./MovieItem"

const MoviesList = ({movies}) => {
    return (
        <div className="row justify-content-center">
            {
                movies.map(movie => <MovieItem movie={movie} />)
            }
            
        </div>
    )
    
}

export default MoviesList
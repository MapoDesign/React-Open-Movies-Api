const MovieItem = ({movie}) => {
    return (
        <div className="card m-3" style={{width: '18rem'}}>
            <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
            <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <a href={'https://open-movies-database.netlify.app/movies/' + movie.imdbID} className="btn btn-primary">View datail</a>
            </div>
        </div>
    );
}

export default MovieItem
const MovieItem = ({movie, onSelectedMovie}) => {
    return (
        <div className="card m-3" style={{width: '18rem'}}>
            <img src={movie.Poster} className="card-img-top" alt={movie.Title} />
            <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
            </div>
            <div className="card-footer">
                <button onClick={()=>{onSelectedMovie(movie)}} href={'/movies/' + movie.imdbID} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">View detail</button>
            </div> 
        </div>
    );
}

export default MovieItem
// input confirms data on release date and poster and stuff like that
// in a JSON object
// css class use Class Name

function MovieCard({movie}){

    function onFavouriteClick(){
        alter("clicked")
    }

    return(
    <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title} />
            <div className="movie-overlay">
                <button className="favourite-btn" onClick={onFavouriteClick}>
                    ♡
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.tile}</h3>
            <p>{movie.release_date}</p>
        </div>
    </div>)
}

export default MovieCard
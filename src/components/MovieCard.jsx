import "../css/MovieCard.css"


  function onFavoriteClick(e) {
    e.preventDefault()
    if (favorite) removeFromFavorites(movie.id)
    else addToFavorites(movie)
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={img.URL}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavoriteClick}
          >
            ♥
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  )
}

export default MovieCard

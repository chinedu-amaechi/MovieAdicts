import MovieCard from "../components/MovieCard"

import "../css/Home.css"

function Home() {
  

  return (
    <div className="home">
      <form className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

    </div>
  )
}

export default Home

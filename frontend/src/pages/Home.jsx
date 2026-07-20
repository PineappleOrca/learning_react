import MovieCard from "../components/MovieCard";
import {useState} from "react"

function Home(){
    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "Alien", release_date: "1980"},
        {id: 3, title: "Star Wars Episode II: Attack of the Clones", release_date: "2002"},
        {id: 4, title: "Iron Man", release_date: "2008"},
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form"> 
                <input 
                    type="text" 
                    placeholder="Search for movies...." 
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                /> 
                <button type="submit" className="search-button">
                    Search
                </button>
            </form>
            <div className="movies-grid">
                {movies.map((movie) => 
                    movie.title.toLowerCase().startsWith(searchQuery) && (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Home
import {useState} from "react";
import ErrorPage from "./ErrorPage";
import MovieCard from "./MovieCard";

function SearchBar() {

    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [showErrorPage, setShowErrorPage] = useState(false)

    let searchTerm = "";

    const searchMovies = async (e) => {
        e.preventDefault()

        if (query === "") {
            setShowErrorPage(true)
        } else {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=76a7bc1729a83da0d730d73e873a4de6&
                    language=en-US&query=${query}&page=1&include_adult=false`;

            try {
                const res = await fetch(url);
                const data = await res.json();
                setMovies(data.results)
                console.log(data);
            } catch (error) {
                console.error(error)
            }
        }
    }

    return (
        <>
            <form className="form" onSubmit={searchMovies}>
                <label htmlFor="query" className="label">Search Movies</label>
                <input 
                    name="query" 
                    placeholder="i.e Multiverse of Madness..." 
                    type="text" 
                    className="input"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit" className="button">Search</button>
            </form>
            <div className="card-list">
                {movies.filter(movie => movie.poster_path).map(movie => (<MovieCard movie={movie} key={movie.id}/>))}
                { showErrorPage && <ErrorPage title={searchTerm}/>}
            </div>
        </>
    )
}

export default SearchBar;
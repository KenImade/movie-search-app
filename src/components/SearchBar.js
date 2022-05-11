

function SearchBar() {

    const searchMovies = async (e) => {
        e.preventDefault()
        console.log("submitting...")

        const query = "dr strange"

        const url = `https://api.themoviedb.org/3/search/movie?api_key=76a7bc1729a83da0d730d73e873a4de6&
                    language=en-US&query=${query}&page=1&include_adult=false`;

        try {
            const res = await fetch(url);
            const data = await res.json(); 
            console.log(data);
        } catch (error) {
            console.error(error)
        } 
    }

    

    return (
        <form className="form" onSubmit={searchMovies}>
            <label htmlFor="query" className="label">Search Movies</label>
            <input name="query" placeholder="i.e Multiverse of Madness..." type="text" className="input"/>
            <button type="submit" className="button">Search</button>
        </form>
    )
}

export default SearchBar;
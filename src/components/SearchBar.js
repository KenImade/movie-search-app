

function SearchBar() {

    return (
        <form className="form">
            <label htmlFor="query" className="label">Search Movies</label>
            <input name="query" placeholder="search for movie..." type="text" className="input"/>
            <button type="submit" className="button">Search</button>
        </form>
    )
}

export default SearchBar;
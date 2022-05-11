import errorLogo from "./../assets/not-found.svg";

function ErrorPage({title}) {

    return (
        <div className="error">
            <h1 className="title">Sorry the movie couldn't be found. Try searching for something else..</h1>
            <img className="error--img" src={errorLogo} alt="movie not found"/>
        </div>
    )
}

export default ErrorPage;
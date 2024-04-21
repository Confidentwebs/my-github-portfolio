import { Link, useRouteError } from "react-router-dom"

function ErrorPage() {
    const error = useRouteError()
    // Remove the console.error statement

    return (
        <>
        <div className="nav-left" style={{marginLeft: '5%', display: 'flex', gap: '10px', border: '2px solid rgb(114, 101, 235)', width: '250px', fontSize: '20px', padding: '10px', boxShadow: '2px 4px 0px white'}}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/ErrorPage">Error test</Link>
      </div><br></br>
      <hr style={{ margin: '0', border: 'none', borderTop: '1px solid rgb(114, 101, 235)' }} />
        <div className="error-page">
            <h1>Oops!</h1>
            <p style={{color: 'white'}}>Sorry, an unexpected error has occurred.</p>
            <p className="error-status">{error.status}</p>
            <p className="erro-status-text"><i>{error.statusText}</i></p>
            <p>Go to <Link to="/"><b>Home page</b></Link></p>
        </div>
        </>
    )
}


export default ErrorPage
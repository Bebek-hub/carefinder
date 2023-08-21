import { Link } from "react-router-dom";

// add an image
function ErrorPage(errors) {
  return (
    <div className="not-found">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error just occur</p>
      <p className="not-found_message">{errors.error}</p>
      <Link to="/" className="not-found_link">
        Home
      </Link>
    </div>
  );
}

export default ErrorPage;

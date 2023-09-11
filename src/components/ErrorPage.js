import { useNavigate } from 'react-router-dom';

// ErrorPage component that displays a 404 error message.
const ErrorPage = ({ page }) => {
  // Get the navigate function from React Router DOM to redirect to the homepage.
  const navigate = useNavigate();

  // Function to navigate back to the homepage when the button is clicked.
  const toHomepage = () => {
    navigate('/');
  };

  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p className="not-found-text">Sorry, this {page} doesn't exist!</p>
      <button className="back-home-button" onClick={toHomepage}>
        Back to Homepage
      </button>
    </div>
  );
};

export default ErrorPage;

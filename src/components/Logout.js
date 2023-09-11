import React from "react";
import { connect } from "react-redux";
import { handleLogin } from "../actions/shared";
import { useNavigate } from "react-router-dom";

const Logout = (props) => {
  // Get the navigate function from react-router-dom
  const navigate = useNavigate();
  // Extract the 'name' prop from the component's props
  const { name } = props;

  // Function to handle user logout
  const handleLogout = () => {
    // Dispatch the handleLogin action with a null value to log the user out
    props.dispatch(handleLogin(null));
    // Navigate back to the homepage ('/')
    navigate("/");
  };

  return (
    <li data-testid="test-logout" className="menu-option">
      {/* Button to trigger the logout process */}
      <button className="menu-button" onClick={handleLogout}>
        Logout
      </button>
    </li>
  );
};

// Map relevant state data to props
const mapStateToProps = ({ authedUser, users }) => {
  // Get the user's name based on the authedUser ID
  const user = users[authedUser];
  const { name } = user;
  return {
    name,
  };
};

// Connect the component to the Redux store
export default connect(mapStateToProps)(Logout);

import React from 'react';
import { connect } from 'react-redux';

const Status = (props) => {
  const { authedUser, users } = props;

  if (!authedUser) {
    // If the user is not logged in, render "Not Logged In"
    return <div className="user">Not Logged In</div>;
  }

  // If the user is logged in, retrieve user information
  const { avatarURL, name } = users[authedUser];

  return (
    <div data-testid="status-test" className="status">
      {/* Display user avatar */}
      <img
        src={avatarURL}
        width="30"
        height="30"
        alt={`${name}'s avatar`}
      />
      {/* Display user name */}
      <div className="user-name">{name}</div>
    </div>
  );
};

// MapStateToProps function to get necessary data from the Redux store
const mapStateToProps = ({ authedUser, users }) => ({
  authedUser,
  users,
});

export default connect(mapStateToProps)(Status);

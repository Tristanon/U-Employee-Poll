import React from 'react';
import { connect } from 'react-redux';
import { handleLogin } from '../actions/shared';

const Login = (props) => {
  const { users, userIds } = props;

  // Create an array of users from user IDs
  const usersArr = userIds.map((userId) => users[userId]);

  // Handle user login by dispatching the selected user ID
  const handleUserLogin = (e) => {
    props.dispatch(handleLogin(e.target.value));
  };

  return (
    <div data-testid="test-login" className="login-container">
      <div className="login-form">
        <select
          data-testid="test-select"
          name="login"
          onChange={handleUserLogin}
          defaultValue="default" // Set a default value that is not a valid user ID
        >
          <option value="default" disabled>
            Choose your username
          </option>
          {usersArr.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

// Map user IDs from the store to props
const mapStateToProps = ({ users }) => {
  const userIds = Object.keys(users);
  return { users, userIds };
};

export default connect(mapStateToProps)(Login);

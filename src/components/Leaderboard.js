import React from 'react';
import { connect } from 'react-redux';
import Board from './Board';

const Leaderboard = (props) => {
  // Destructure the users from props
  const { users } = props;

  // Create an array of users with added numbers
  const usersWithNums = Object.values(users).map((user) => {
    // Extract the user's questions and answers
    const { questions, answers } = user;

    // Calculate the number of questions asked and answered
    const numQasked = questions.length;
    const numQanswered = Object.keys(answers).length;

    // Calculate the total score as the sum of questions asked and answered
    const sum = numQanswered + numQasked;

    return {
      ...user,
      numQanswered,
      numQasked,
      sum,
    };
  });

  // Sort users by their total score in descending order
  const sortedUsers = usersWithNums.sort((a, b) => b.sum - a.sum);

  return (
    <div className='leaderboard-container'>
      <div className="leaderboard">
        <h1 className="leaderboard-heading"> Leaderboard </h1>
        <ul>
          {sortedUsers.map((user) => (
            <li key={user.id}>
              {/* Render the user's information using the Board component */}
              <Board
                avatar={user.avatarURL}
                name={user.name}
                numQanswered={user.numQanswered}
                numQasked={user.numQasked}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users }) => ({
  users,
});

export default connect(mapStateToProps)(Leaderboard);

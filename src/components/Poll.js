import React from 'react';
import { connect } from 'react-redux';
import AnsweredPoll from './AnsweredPoll';
import UnansweredPoll from './UnansweredPoll';

const Poll = ({ poll, authedUser }) => {
  const { optionOne, optionTwo } = poll;

  // Check if the user has answered this poll
  const userChoseOptionOne = optionOne.votes.includes(authedUser);
  const userChoseOptionTwo = optionTwo.votes.includes(authedUser);

  // Determine if the poll is unanswered
  const notAnsweredYet = !userChoseOptionOne && !userChoseOptionTwo;

  return (
    <div className="poll-container">
      {/* Conditionally render the appropriate poll component */}
      {notAnsweredYet ? (
        <UnansweredPoll poll={poll} />
      ) : (
        <AnsweredPoll poll={poll} />
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions }, { id }) => ({
  poll: questions[id],
  authedUser,
});

export default connect(mapStateToProps)(Poll);

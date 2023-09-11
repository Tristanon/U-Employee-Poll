import React from "react";
import { connect } from "react-redux";
import Author from "./Author";
import formatDate from "../data/formatDate";
import { handleAnswerQuestion } from "../actions/questions";
import { updateUsersAnswers } from "../actions/users";

const UnansweredPoll = (props) => {
  // Destructure props to get necessary data
  const { poll, users, authedUser } = props;
  const { id, author, optionOne, optionTwo, timestamp } = poll;
  const avatar = users[author].avatarURL;
  const name = users[author].name;

  // Format the timestamp
  const date = formatDate(timestamp);

  // Function to handle option selection
  const chooseOption = (e) => {
    const answer = e.target.value;
    const qid = id;

    // Dispatch actions to handle answering the question
    props.dispatch(handleAnswerQuestion({ authedUser, qid, answer }));
    props.dispatch(updateUsersAnswers({ authedUser, qid, answer }));
  };

  return (
    <div className="unanswered-poll">
      <div className="poll-top">
        <Author name={name} date={date} avatar={avatar} />
      </div>
      <div className="poll-bottom">
        <h1 className="poll-heading">
          Would you rather
          <div className="radiobuttons" onChange={chooseOption}>
            {/* Radio buttons for options */}
            <label className="poll-option-label">
              <input type="radio" name="options" value="optionOne" />
              {optionOne.text}
            </label>
            <span className="or-text">or</span>
            <label className="poll-option-label">
              <input type="radio" name="options" value="optionTwo" />
              {optionTwo.text}
            </label>
          </div>
        </h1>
      </div>
    </div>
  );
};

// MapStateToProps function to get necessary data from the Redux store
const mapStateToProps = ({ users, authedUser }, { poll }) => {
  return {
    users,
    poll,
    authedUser,
  };
};

export default connect(mapStateToProps)(UnansweredPoll);

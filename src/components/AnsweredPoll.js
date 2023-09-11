import React from "react";
import { connect } from "react-redux";
import formatDate from "../data/formatDate";
import Author from "./Author";

const AnsweredPoll = (props) => {
  // Destructure props to get necessary data
  const { poll, authedUser, users } = props;
  const { author, optionOne, optionTwo, timestamp } = poll;
  const avatar = users[author].avatarURL;
  const name = users[author].name;

  // Format the timestamp
  const date = formatDate(timestamp);

  // Get the number of votes for each option
  const optionOneNum = optionOne.votes.length;
  const optionTwoNum = optionTwo.votes.length;
  
  // Calculate the sum of votes
  const optionsSum = optionOneNum + optionTwoNum;

  // Check if the authedUser chose optionOne
  const userChoseOptionOne = optionOne.votes.includes(authedUser);

  return (
    <div className="answered-poll">
      <div className="poll-top">
        <Author name={name} date={date} avatar={avatar} />
      </div>
      <div className="poll-bottom">
        <h1 className="poll-heading">
          Would you rather<br />
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
        </h1>
        {/* Display the user's answer */}
        <h3 className="poll-option">
          My answer: {userChoseOptionOne ? optionOne.text : optionTwo.text}
        </h3>
        <p className="poll-stats">
          Votes: {userChoseOptionOne ? optionOneNum : optionTwoNum} | percent:{" "}
          <span className="poll-percent">
            {/* Calculate and display the percentage */}
            {userChoseOptionOne
              ? `${Math.round((optionOneNum / optionsSum) * 100)}%`
              : `${Math.round((optionTwoNum / optionsSum) * 100)}%`}
          </span>
        </p>
      </div>
    </div>
  );
};

// MapStateToProps function to get necessary data from the Redux store
const mapStateToProps = ({ authedUser, users }, { poll }) => {
  return { authedUser, poll, users };
};

export default connect(mapStateToProps)(AnsweredPoll);

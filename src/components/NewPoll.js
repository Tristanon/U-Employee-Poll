import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleSaveQuestion } from '../actions/questions';

const NewPoll = (props) => {
  const { authedUser, dispatch } = props;
  const navigate = useNavigate();

  // Initial question object with author and empty option texts
  const initialQuestionObject = {
    author: authedUser,
    optionOneText: '',
    optionTwoText: '',
  };

  // State to manage the current question and button disabled status
  const [question, setQuestion] = useState(initialQuestionObject);
  const [disabled, setDisabled] = useState(true);

  // Function to check if both option texts are not empty
  const checkInput = () => {
    if (question.optionOneText !== '' && question.optionTwoText !== '') {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  // Effect to trigger the input check when the question changes
  useEffect(() => {
    checkInput();
  }, [question]);

  // Handle form submission
  const handlePollSubmit = (e) => {
    e.preventDefault();

    // Dispatch an action to save the new question
    dispatch(handleSaveQuestion(question)).then(() => {
      // Reset the question form and button status after submission
      setQuestion(initialQuestionObject);
      setDisabled(true);

      // Navigate to the home page
      navigate('/');
    });
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuestion({ ...question, [name]: value });
  };

  return (
    <div className="new-poll-container">
      <div className="new-poll">
        <h1 className="new-poll-heading">Add a new poll</h1>
        <form onSubmit={handlePollSubmit} className="poll-form">
          Would you rather <br />
          <input
            data-testid="test-option-one"
            name="optionOneText"
            value={question.optionOneText}
            onChange={handleInputChange}
            className="input-margin"
            type="text"
            size="50"
          />
          or <br />
          <input
            data-testid="test-option-two"
            name="optionTwoText"
            value={question.optionTwoText}
            onChange={handleInputChange}
            className="input-margin"
            type="text"
            size="50"
          />
          ? <br />
          <button
            data-testid="test-submit-button"
            disabled={disabled}
            className="add-button"
          >
            Add poll
          </button>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(NewPoll);
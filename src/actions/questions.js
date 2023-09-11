import { showLoading, hideLoading } from "react-redux-loading-bar";
import { _saveQuestion, _saveQuestionAnswer } from "../data/_DATA";
import { updateUsersQuestions } from "./users";

// Action Types
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const SAVE_QUESTION = "SAVE_QUESTION";

// Action Creator: Receive Questions
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

// Action Creator: Handle Answering a Question
export function handleAnswerQuestion({ authedUser, qid, answer }) {
  return (dispatch) => {
    dispatch(showLoading()); // Show loading bar while processing

    return _saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    })
      .then(() => {
        // Once the answer is saved, dispatch the addAnswer action
        dispatch(addAnswer({ authedUser, qid, answer }));
      })
      .then(() => dispatch(hideLoading())); // Hide loading bar when done
  };
}

// Action Creator: Handle Saving a New Question
export function handleSaveQuestion(question) {
  return (dispatch) => {
    dispatch(showLoading()); // Show loading bar while processing

    return _saveQuestion(question)
      .then((formattedQuestion) => {
        // Once the new question is saved, dispatch the saveQuestion action
        dispatch(saveQuestion(formattedQuestion));
        // Update user's questions as well
        dispatch(updateUsersQuestions(formattedQuestion));
      })
      .then(() => dispatch(hideLoading())) // Hide loading bar when done
      .catch((e) => console.log("Error from handleSaveQuestion: ", e)); // Handle any errors
  };
}

// Action Creator: Add an Answer
function addAnswer({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
  };
}

// Action Creator: Save a Question
function saveQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question,
  };
}

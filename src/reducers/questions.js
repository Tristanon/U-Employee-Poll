import {
  RECEIVE_QUESTIONS,
  ANSWER_QUESTION,
  SAVE_QUESTION,
} from "../actions/questions";

// Reducer for an individual option (vote)
function option(state = {}, action) {
  switch (action.type) {
    case ANSWER_QUESTION:
      const { authedUser } = action;
      const { votes } = state;

      return {
        ...state,
        votes: votes.concat([authedUser]), // Add the authenticated user to the list of votes.
      };
    default:
      return state;
  }
}

// Reducer for an individual question's options
function questionX(state = {}, action) {
  switch (action.type) {
    case ANSWER_QUESTION:
      const { answer } = action;

      return {
        ...state,
        [answer]: option(state[answer], action), // Update the option with the given answer.
      };
    default:
      return state;
  }
}

// Main questions reducer
export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions, // Merge incoming questions into the state.
      };

    case ANSWER_QUESTION:
      const { qid } = action;

      return {
        ...state,
        [qid]: questionX(state[qid], action), // Update the question with the answered option.
      };

    case SAVE_QUESTION:
      const { question } = action;
      const { id } = question;

      return {
        ...state,
        [id]: question, // Add the new question to the state.
      };

    default:
      return state;
  }
}
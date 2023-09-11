// Action Types
export const RECEIVE_USERS = "RECEIVE_USERS";
export const UPDATE_USERS_ANSWERS = "UPDATE_USERS_ANSWERS";
export const UPDATE_USERS_QUESTIONS = "UPDATE_USERS_QUESTIONS";

// Action Creator: Receive Users
export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

// Action Creator: Update Users' Answers
export function updateUsersAnswers({ authedUser, qid, answer }) {
  return {
    type: UPDATE_USERS_ANSWERS,
    authedUser,
    qid,
    answer,
  };
}

// Action Creator: Update Users' Questions
export function updateUsersQuestions(question) {
  return {
    type: UPDATE_USERS_QUESTIONS,
    authedUser: question.author, // Update the user's questions when a new question is added
    id: question.id,
  };
}
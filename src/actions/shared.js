import { _getInitialData } from '../data/_DATA';
import { receiveQuestions } from './questions';
import { receiveUsers } from './users';
import { setAuthedUser } from './authedUser';
import { showLoading, hideLoading } from "react-redux-loading-bar";

// Action Creator: Handle Initial Data Fetch
export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading()); // Show loading bar while fetching initial data
        return _getInitialData().then(({ users, questions }) => {
            // Once data is received, dispatch actions to populate Redux store
            dispatch(receiveUsers(users));
            dispatch(receiveQuestions(questions));
            dispatch(hideLoading()); // Hide loading bar when done
        }) 
    }
}

// Action Creator: Handle User Login
export function handleLogin(AUTHED_ID) {
    return (dispatch) => {
        // Dispatch action to set the authenticated user
        dispatch(setAuthedUser(AUTHED_ID));
    }
}
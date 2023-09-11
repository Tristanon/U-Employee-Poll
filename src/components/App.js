// App.js
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { handleInitialData } from '../actions/shared';
import { LoadingBar } from 'react-redux-loading-bar';
import Login from './Login';
import Dashboard from './Dashboard';
import MenuBar from './MenuBar';
import Status from './Status';
import ErrorPage from './ErrorPage';
import PollPage from './PollPage';
import NewPoll from './NewPoll';
import Leaderboard from './Leaderboard';
import '../styles/App.css';

function App(props) { 
    const { loading } = props;
    useEffect(() => {
      props.dispatch(handleInitialData());
    }, [loading]);

    return (
        <Fragment>
            <LoadingBar />
            <div id="app-container">
                <div id="title-container">
                    <Status />
                    <h1>U-Employee Poll</h1>
                </div>
                <MenuBar />
                {loading === true ? (
                  <Login />
                ) : (
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="*" element={<ErrorPage />} />
                    <Route path="/questions/:question_id" element={<PollPage />} />
                    <Route path="/add" element={<NewPoll />} />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                  </Routes>
                )}
            </div>
        </Fragment>
    );
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser == null,
});

export default connect(mapStateToProps)(App);
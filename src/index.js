import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store"

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
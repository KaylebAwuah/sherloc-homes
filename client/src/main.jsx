<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
=======
/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
>>>>>>> 93256698aff53974234a8a56aaa7aa89214a6776

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

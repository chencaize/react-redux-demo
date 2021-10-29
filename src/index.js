import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "./store";
import { reducer } from "./reducer";
import MyContext from "./context";

ReactDOM.render(
  <MyContext.Provider value={{ store: createStore(reducer) }}>
    <App />
  </MyContext.Provider>,
  document.getElementById('root')
);
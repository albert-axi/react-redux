import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import { Provider } from "react-redux"
import thunk from "redux-thunk";
import countReducer from './reducers/countReducer'
import authorsReducer from "./reducers/authorsReducer"
import booksReducer from "./reducers/booksReducer"
import astronautsReducer from './reducers/astronautsReducer'

const rootReducer = combineReducers({
  count: countReducer,
  authors: authorsReducer,
  books: booksReducer,
  astronauts: astronautsReducer
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

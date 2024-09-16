import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';
import { loadPosts } from './actions';


const initialState = {
  posts: [],
  loading: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'load/posts/start':
      return {
        ...state,
        loading: true
      }

    case 'load/posts/fulfilled':
      return {
        ...state,
        posts: action.payload,
        loading: false
      }

    case 'delete/todo/fulfilled':
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload)
      }

    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

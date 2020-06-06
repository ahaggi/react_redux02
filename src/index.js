import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./js/store/index";
import App from "./js/components/App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { loadPostsAction } from './js/actions/actions';





const store = configureStore();
store.dispatch(loadPosts());

 function loadPosts() {  
  return function(dispatch) {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
      console.log(json)
      dispatch(loadPostsAction(json));
    }).catch(error => {
      throw(error);
    });
  }};


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
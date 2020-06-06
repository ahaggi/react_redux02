

export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";

export const addPostAction = post => ({ type: ADD_POST       , payload: post });
export const deletePostAction = post => ({ type: DELETE_POST , payload: post });
export const loadPostsAction = posts => ({ type: LOAD_POSTS_SUCCESS , payload: posts });
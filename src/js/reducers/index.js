
import { ADD_POST, DELETE_POST } from '../actions/actions';

const initialState = {
  posts: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case DELETE_POST:
      let ndx = state.posts.indexOf(action.payload)
      if (ndx == -1) return { ...state }
      return { posts: [...state.posts.slice(0, ndx), ...state.posts.slice(ndx + 1)] };
    case "LOAD_POSTS_SUCCESS":
      return { posts: action.payload };


    default:
      return state;
  }
};


export default rootReducer;
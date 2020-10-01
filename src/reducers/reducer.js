import { GET_DATA, GET_ERROR, GET_REPOS, SET_THEME } from '../actions/types';

const initialState = {
  data: null,
  error: null,
  repos: null,
  theme: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, data: action.payload, loading: false };
    case GET_REPOS:
      return { ...state, repos: action.payload };
    case SET_THEME:
      return { ...state, theme: action.payload };
    case GET_ERROR:
      return { ...state };
    default:
      return state;
  }
};

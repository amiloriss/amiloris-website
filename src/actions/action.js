import { GET_DATA, GET_ERROR, GET_REPOS } from './types';
import axios from 'axios';

export const getRepos = () => async (dispatch) => {
  try {
    const res = await axios.get('https://api.github.com/users/amiloriss/repos');
    const data = res.data;
    dispatch({ type: GET_REPOS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ERROR });
  }
};

export const getData = () => async (dispatch) => {
  try {
    const res = await axios.get(
      'https://portfolio-b1e46.firebaseio.com/portfolio.json'
    );
    const data = res.data;
    dispatch({ type: GET_DATA, payload: data });
  } catch (error) {
    dispatch({ type: GET_ERROR });
  }
};
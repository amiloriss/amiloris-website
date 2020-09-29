import { GET_DATA, GET_ERROR, GET_REPOS, SET_THEME } from './types';
import axios from 'axios';

export const changeTheme = (setTheme) => (dispatch) => {
  dispatch({ type: SET_THEME, payload: setTheme });
};

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

export const getMailData = (email, name, subject, message) => () => {
  let dataMail = {
    email,
    name,
    subject,
    message,
  };
  axios
    .post('/api/form', dataMail)
    .then((res) => res)
    .catch(() => {});
};

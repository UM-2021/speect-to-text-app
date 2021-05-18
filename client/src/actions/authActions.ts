/** @format */

import axios from 'axios';
import { LOGIN_FAILED, LOGIN_REQUEST, LOGIN_SUCCESS } from './types';

export const login = (email: string, password: string) => async (dispatch: any) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const { data } = await axios.post('http://localhost:8000/api/login/', {
      username: email,
      password
    });

    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: LOGIN_FAILED,
      payload:
        error.response && error.response.data.detail
          ? error.response.data.detail
          : error.message
    });
  }
};

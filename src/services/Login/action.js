import {
  AUTHENTICATE_USER,
  AUTHENTICATE_USER_SOCIAL,
  SIGNUP_DIRECT,
} from './actionType';
import {URL, USERS} from '../constants';

export const signUpDirect = (userInfo, callback) => async dispatch => {
  const {username, password, phone} = userInfo;
  const response = await fetch(`${URL + USERS}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
      name: username,
      phone,
      socialId: null,
    }),
  });
  const {status, body, message} = await response.json();
  if (status) {
    callback(status);
    dispatch({
      type: SIGNUP_DIRECT,
      payload: body.id,
    });
  } else {
    callback(message);
  }
};

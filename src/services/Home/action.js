import {ADD_NOTE, DELETE_NOTE, GET_NOTES} from './actionType';
import {URL, NOTES} from '../constants';

export const getNotes = id => async dispatch => {
  const res = await fetch(`${URL + NOTES + id}`, {method: 'GET'});
  const {response} = await res.json();
  dispatch({
    type: GET_NOTES,
    payload: response,
  });
};

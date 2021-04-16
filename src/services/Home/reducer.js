import {GET_NOTES, ADD_NOTE, DELETE_NOTE} from './actionType';

const initialState = {
  notes: undefined,
};

export default function HomeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload,
      };
    default:
      return state;
  }
}

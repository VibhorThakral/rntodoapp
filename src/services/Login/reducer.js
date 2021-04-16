import {
  AUTHENTICATE_USER,
  AUTHENTICATE_USER_SOCIAL,
  SIGNUP_DIRECT,
  SIGNUP_SOCIAL,
} from './actionType';

const initialState = {
  userId: undefined,
};

export default function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_DIRECT:
      return {
        ...state,
        userId: action.payload,
      };
    case AUTHENTICATE_USER_SOCIAL:
      return {
        ...state,
        userId: action.payload,
      };
    case SIGNUP_SOCIAL:
      return {
        ...state,
        userId: action.payload,
      };
    case AUTHENTICATE_USER:
      return {
        ...state,
        userId: action.payload,
      };
    default:
      return state;
  }
}

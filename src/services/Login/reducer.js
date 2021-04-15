import {
  AUTHENTICATE_USER,
  AUTHENTICATE_USER_SOCIAL,
  SIGNUP_DIRECT,
  SIGNUP_SOCIAL,
} from './actionType';

const initialState = {
  userInfo: [],
  userId: undefined,
  auth: false,
};

export default function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_DIRECT:
      return {
        ...state,
        userId: action.payload,
        auth: true,
      };
    case AUTHENTICATE_USER_SOCIAL:
      return {
        ...state,
        userId: action.payload,
        auth: true,
      };
    case SIGNUP_SOCIAL:
      return {
        ...state,
        userId: action.payload,
        auth: true,
      };
    case AUTHENTICATE_USER:
      return {
        ...state,
        userId: action.payload,
        auth: true,
      };
    default:
      return state;
  }
}

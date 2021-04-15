import {
  AUTHENTICATE_USER,
  AUTHENTICATE_USER_SOCIAL,
  SIGNUP_DIRECT,
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
      };
    default:
      return state;
  }
}

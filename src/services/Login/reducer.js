import {
  AUTHENTICATE_USER,
  AUTHENTICATE_USER_SOCIAL,
  SIGNUP_DIRECT,
  SIGNUP_SOCIAL,
  LOGOUT,
} from './actionType';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  userId: undefined,
};

const storeData = async uID => {
  try {
    await AsyncStorage.setItem('@user_id', uID.toString());
  } catch (e) {
    console.log(e);
  }
};

export default function LoginReducer(state = initialState, action) {
  if (
    action.payload &&
    (action.type === 'AUTHENTICATE_USER' ||
      action.type === 'SIGNUP_DIRECT' ||
      action.type === 'AUTHENTICATE_USER_SOCIAL' ||
      action.type === 'SIGNUP_SOCIAL')
  ) {
    const uID = action.payload;
    storeData(uID);
  }
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
    case LOGOUT:
      return {
        userId: undefined,
      };
    default:
      return state;
  }
}

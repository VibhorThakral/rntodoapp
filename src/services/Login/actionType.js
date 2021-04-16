// Action Types

// To Login Users with Username & Password
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER';

/*
  To Signup/Login Users with Social Login
  Authenticate User using Social ID, if the SocialId received does not exist, will send a POST request to generate a new user.
*/
export const AUTHENTICATE_USER_SOCIAL = 'AUTHENTICATE_USER_SOCIAL';

// Signup Users with Social
export const SIGNUP_SOCIAL = 'SIGNUP_SOCIAL';

// To Signup Users with username & password
export const SIGNUP_DIRECT = 'SIGNUP_DIRECT';

// To Logout users
export const LOGOUT = 'LOGOUT';

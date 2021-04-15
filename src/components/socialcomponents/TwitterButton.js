import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  NativeModules,
  TouchableOpacity,
} from 'react-native';

const {RNTwitterSignIn} = NativeModules;

const Constants = {
  TWITTER_COMSUMER_KEY: 'PQRU4sYCBe4EJI1cKFQkSrfZf',
  TWITTER_CONSUMER_SECRET: 'ZPWttMCOlhAzezRZ0MJLdobZLcuQxhuK5B4YBzsXeeigeQykaU',
};

const TwitterLoginButton = () => {
  const twitterSignIn = () => {
    RNTwitterSignIn.init(
      Constants.TWITTER_COMSUMER_KEY,
      Constants.TWITTER_CONSUMER_SECRET,
    );

    RNTwitterSignIn.logIn()
      .then(userInfo => {
        console.log('twitter log in');
        const {authToken, authTokenSecret} = userInfo;
        authToken && authTokenSecret; // && Action Dispatch
      })
      .catch(error => console.log(error));
  };

  return (
    <TouchableOpacity style={styles.button} onPress={twitterSignIn}>
      <Text>Login With Twitter</Text>
    </TouchableOpacity>
  );
};

const TwitterLogoutButton = () => {
  const handleLogout = () => {
    console.log('twitter logout');
    RNTwitterSignIn.logOut();
    //Dispatch Action
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleLogout}>
      <Text>Twitter Logout</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});

export {TwitterLoginButton, TwitterLogoutButton};

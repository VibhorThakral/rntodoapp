import React from 'react';
import {StyleSheet, Text, NativeModules, TouchableOpacity} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const {RNTwitterSignIn} = NativeModules;

const Constants = {
  TWITTER_COMSUMER_KEY: 'PQRU4sYCBe4EJI1cKFQkSrfZf',
  TWITTER_CONSUMER_SECRET: 'ZPWttMCOlhAzezRZ0MJLdobZLcuQxhuK5B4YBzsXeeigeQykaU',
};

const TwitterLoginButton = ({callback}) => {
  const twitterSignIn = () => {
    RNTwitterSignIn.init(
      Constants.TWITTER_COMSUMER_KEY,
      Constants.TWITTER_CONSUMER_SECRET,
    );

    RNTwitterSignIn.logIn()
      .then(userInfo => {
        const {authToken, authTokenSecret, email, userID, userName} = userInfo;
        if (authToken && authTokenSecret) {
          const userData = {
            username: email,
            password: userID,
            phone: 9999999999,
            name: userName,
            socialId: userID,
          };
          callback(userData);
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <TouchableOpacity style={styles.loginBtn} onPress={twitterSignIn}>
      <AntDesignIcon size={30} color="#fff" name="twitter" />
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

const styles = StyleSheet.create({
  loginBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1DA1F2',
    padding: 10,
    borderRadius: 100,
  },
});

export {TwitterLoginButton, TwitterLogoutButton};

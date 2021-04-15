import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

GoogleSignin.configure({
  iosClientId:
    '959505021560-a9hi32lbkpfqjcop72699qev9efe79pu.apps.googleusercontent.com',
});

const GoogleLoginButton = () => {
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('Google Login', userInfo);
      // Dispatch Action
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('SIGN_IN_CANCELLED:', error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('IN_PROGRESS:', error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('PLAY_SERVICES_NOT_AVAILABLE:', error);
      } else {
        console.log('Error:', error);
      }
    }
  };

  return (
    <TouchableOpacity onPress={signIn} style={styles.loginBtn}>
      <AntDesignIcon size={35} color="#fff" name="googleplus" />
    </TouchableOpacity>
  );
};

const GoogleLogoutButton = () => {
  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      console.log(
        'signOut(): REVOKE_ACCESS \nsignOut: SIGN_OUT, google logout',
      );
      // Dispatch Action
    } catch (error) {
      console.log('signOut(): ', error);
    }
  };

  return (
    <TouchableOpacity onPress={signOut} style={styles.logoutView}>
      <Text style={[styles.profileTxt, styles.logoutTxt]}>Google Logout</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loginBtn: {
    backgroundColor: '#DB4437',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 50,
  },
});

export {GoogleLoginButton, GoogleLogoutButton};

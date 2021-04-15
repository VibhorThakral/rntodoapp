import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {
  GoogleLoginButton,
  GoogleLogoutButton,
} from './src/components/socialcomponents/GoogleButton';
import {
  TwitterLoginButton,
  TwitterLogoutButton,
} from './src/components/socialcomponents/TwitterButton';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <GoogleLoginButton />
        <GoogleLogoutButton />
        <TwitterLoginButton />
        <TwitterLogoutButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default App;

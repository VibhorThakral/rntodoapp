import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import TwitterButton from './TwitterButton';

GoogleSignin.configure({
  iosClientId:
    '959505021560-a9hi32lbkpfqjcop72699qev9efe79pu.apps.googleusercontent.com',
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
      isUserLoggedIn: false,
    };
  }

  signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({userInfo, isUserLoggedIn: true});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('SIGN_IN_CANCELLED');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('IN_PROGRESS');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('PLAY_SERVICES_NOT_AVAILABLE');
      } else {
        console.log('ELSE Block');
      }
    }
  };

  render() {
    const {isUserLoggedIn, userInfo} = this.state;
    return (
      <View style={styles.container}>
        {isUserLoggedIn ? (
          <View style={styles.container}>
            <Image style={styles.img} source={{uri: userInfo.user.photo}} />
            <Text style={styles.text}>Welcome {userInfo.user.givenName}</Text>
            <Text style={styles.text}>{userInfo.user.email}</Text>
          </View>
        ) : (
          <View style={styles.container}>
            <Icon size={100} name="home" color="red" />
            <GoogleSigninButton
              style={styles.btn}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={this.signIn}
            />
            <TwitterButton style={styles.button} />
          </View>
        )}
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
  text: {
    color: 'red',
    fontSize: 30,
    marginTop: 10,
    fontWeight: '600',
  },
  btn: {
    marginTop: 30,
    width: 220,
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  button: {
    height: 50,
  },
});

export default App;

import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import BasicTextInput from '../components/formcomponents/BasicTextInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GoogleLoginButton} from '../components/socialcomponents/GoogleButton';
import {TwitterLoginButton} from '../components/socialcomponents/TwitterButton';

class SignupScreen extends Component {
  state = {
    email: '',
    username: '',
    password: '',
    repassword: '',
  };

  getEmail = text => this.setState({emai: text});
  getUserName = text => this.setState({username: text});
  getPassword = text => this.setState({password: text});
  getRePassword = text => this.setState({repassword: text});

  render() {
    const navigation = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.topBarHeading}>Sign Up</Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.topBarLink}>Login</Text>
          </TouchableOpacity>
        </View>

        <BasicTextInput
          placeholder="Email address"
          keyboardType="email-address"
          getInput={text => this.getEmail(text)}
        />

        <BasicTextInput
          placeholder="Username"
          keyboardType="default"
          getInput={text => this.getUserName(text)}
        />

        <BasicTextInput
          placeholder="Password"
          keyboardType="default"
          secureTextEntry={true}
          type="password"
          getInput={text => this.getPassword(text)}
        />

        <BasicTextInput
          placeholder="Repeat Password"
          keyboardType="default"
          secureTextEntry={true}
          type="password"
          getInput={text => this.getRePassword(text)}
        />

        <TouchableOpacity style={styles.loginButton}>
          <Ionicons
            style={styles.loginButtonIcon}
            name="ios-checkmark"
            size={30}
            color="blue"
          />
          <Text style={styles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomBar}>
          <Text style={styles.bottomBarText}>Terms of Service</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: 'white',
  },
  topBar: {
    marginVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topBarHeading: {
    fontSize: 36,
    fontWeight: '600',
  },
  topBarLink: {
    color: '#aaa',
    fontSize: 20,
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 60,
    ...Platform.select({
      ios: {
        shadowColor: 'blue',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  loginButtonText: {
    fontSize: 20,
    textTransform: 'uppercase',
    color: 'blue',
    letterSpacing: 1.3,
  },
  loginButtonIcon: {
    marginRight: 10,
  },
  bottomBar: {
    alignItems: 'center',
    marginTop: '50%',
  },
  bottomBarText: {
    color: 'gray',
    fontSize: 18,
  },
});

export default SignupScreen;

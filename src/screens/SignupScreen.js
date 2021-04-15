import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import BasicTextInput from '../components/formcomponents/BasicTextInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GoogleLoginButton} from '../components/socialcomponents/GoogleButton';
import {TwitterLoginButton} from '../components/socialcomponents/TwitterButton';
import {signUpDirect} from '../services/Login/action';
import {connect} from 'react-redux';

class SignupScreen extends Component {
  state = {
    email: '',
    username: '',
    password: '',
    repassword: '',
    phone: '',
  };

  getEmail = text => this.setState({emai: text});
  getUserName = text => this.setState({username: text});
  getPassword = text => this.setState({password: text});
  getRePassword = text => this.setState({repassword: text});
  getPhone = text => this.setState({phone: text});

  signUp = () => {
    const userData = this.state;
    const callback = message => {
      if (message === true) {
        this.props.navigation.navigate('HomeScreen');
      } else {
        Alert.alert('Error', message, [
          {
            text: 'Close',
            style: 'cancel',
          },
        ]);
      }
    };
    this.props.signUpDirect(userData, callback);
  };

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
          placeholder="Phone Number"
          keyboardType="number-pad"
          getInput={text => this.getPhone(text)}
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

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => this.signUp()}>
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
  },
  bottomBarText: {
    color: 'gray',
    fontSize: 18,
  },
});

const mapDispatchToProps = dispatch => ({
  signUpDirect: (userData, callback) =>
    dispatch(signUpDirect(userData, callback)),
});

export default connect(null, mapDispatchToProps)(SignupScreen);

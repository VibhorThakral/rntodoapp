import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, Platform} from 'react-native';
import Routes from './src/routes/Routes';
import {connect} from 'react-redux';

class App extends Component {
  componentDidMount() {
    const dark = this.props.themeDark;
    console.log(dark);
    if (dark) {
      StatusBar.setBarStyle('light-content');
      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor('#262626');
        StatusBar.setTranslucent(true);
      }
    } else {
      StatusBar.setBarStyle('dark-content');
      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor('white');
        StatusBar.setTranslucent(true);
      }
    }
  }

  render() {
    const dark = this.props.themeDark;
    return (
      <>
        <StatusBar />
        <SafeAreaView style={[styles.container, dark && styles.darkBackground]}>
          <Routes />
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  darkBackground: {
    backgroundColor: '#262626',
  },
});

const mapStateToProps = state => ({
  themeDark: state.home.themeDark,
});

export default connect(mapStateToProps)(App);

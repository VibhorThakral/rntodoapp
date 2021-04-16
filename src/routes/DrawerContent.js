import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Avatar,
  Title,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {logOut} from '../services/Login/action';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function DrawerContent(props) {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const signOut = () => {
    dispatch(logOut());
    props.navigation.navigate('LoginScreen');
  };

  useEffect(() => {
    (async function getData() {
      try {
        const user_name = await AsyncStorage.getItem('@user_name');
        setUsername(user_name);
      } catch (e) {
        console.log(e);
      }
    })();
  });

  return (
    <View style={styles.container}>
      <View style={styles.drawerContent}>
        <View style={styles.userView}>
          <Avatar.Image
            source={{
              uri: 'https://source.unsplash.com/1600x900/?man,woman',
            }}
            size={100}
          />
          <View>
            <Title style={styles.title}>{username}</Title>
          </View>
        </View>

        <Drawer.Section>
          <TouchableRipple
            onPress={() => {
              console.log('Hello');
            }}>
            <View style={styles.preference}>
              <Text style={styles.themeToggleText}>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </View>
      <TouchableOpacity
        onPress={() => signOut()}
        style={styles.bottomDrawerSection}>
        <Icon name="exit-to-app" color={'#E62D1D'} size={30} />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  drawerContent: {
    flex: 1,
  },
  userView: {
    marginTop: 15,
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    marginTop: 15,
    fontWeight: 'bold',
    color: '#383972',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  logoutText: {
    fontSize: 20,
    color: '#E62D1D',
    fontWeight: '800',
    marginLeft: 10,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  themeToggleText: {
    color: '#383972',
    fontSize: 16,
    fontWeight: '500',
  },
});

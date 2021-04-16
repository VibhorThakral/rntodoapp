import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import HeaderComp from '../components/homecomponents/HeaderComp';
import NoteCard from '../components/homecomponents/NoteCard';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HeaderComp title="Work" count="6" />
        <ScrollView contentContainerStyle={styles.scrollList}>
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
          <NoteCard />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: 'white',
  },
  scrollList: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;

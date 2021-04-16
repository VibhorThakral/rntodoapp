import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

const NoteCard = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.date}>Note card Date</Text>
      <Text style={styles.noteContent}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '95%',
    backgroundColor: 'white',
    marginVertical: 20,
    padding: 20,
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  date: {
    fontSize: 14,
    color: '#E62D1D',
    fontWeight: '400',
  },
  noteContent: {
    color: '#383972',
    marginTop: 10,
    fontWeight: '500',
    fontSize: 16,
  },
});

export default NoteCard;

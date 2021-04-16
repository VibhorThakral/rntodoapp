import React from 'react';
import {View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const NoteCard = ({notesData, deleteNote}) => {
  const {createdDate, data, id} = notesData;

  return (
    <View style={styles.container}>
      <View style={styles.dateView}>
        <Text style={styles.date}>{createdDate}</Text>
        <TouchableOpacity onPress={() => deleteNote(id)}>
          <Ionicons size={25} color="#383972" name="ios-close" />
        </TouchableOpacity>
      </View>
      <Text style={styles.noteContent}>{data}</Text>
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
  dateView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
});

export default NoteCard;

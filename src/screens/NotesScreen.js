import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import HeaderComp from '../components/homecomponents/HeaderComp';
import NoteCard from '../components/homecomponents/NoteCard';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import {deleteNote, getNotes} from '../services/Home/action';

class NotesScreen extends Component {
  state = {
    renderFlag: true,
    refreshing: false,
  };

  deleteNote = noteId => {
    Alert.alert('Delete Note', 'Are you sure you want to delete this note?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Yes',
        style: 'destructive',
        onPress: () => {
          this.props.deleteNote(this.props.userId, noteId);
          this.setState({renderFlag: !this.state.renderFlag});
        },
      },
    ]);
  };

  fetchNotes = () => {
    this.setState({refreshing: true});
    this.props.getNotes(this.props.userId);
    this.setState({refreshing: false});
  };

  render() {
    const {Title} = this.props.route.params;
    let Notes;

    if (this.props.notes !== undefined) {
      Notes = this.props.notes.filter(note => note.title === Title);
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('MenuScreen')}
          style={styles.notesNav}>
          <FeatherIcon name="chevron-left" color="#383972" size={30} />
          <Text style={styles.notesNavText}>My Notes</Text>
        </TouchableOpacity>
        <HeaderComp
          title={Title}
          count={Notes !== undefined ? Notes.length : 0}
        />
        <View style={styles.notesList}>
          {this.props.notes !== undefined && (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={Notes}
              keyExtractor={item => item.id}
              refreshing={this.state.refreshing}
              onRefresh={this.fetchNotes}
              renderItem={item => (
                <NoteCard
                  deleteNote={value => this.deleteNote(value)}
                  notesData={item.item}
                />
              )}
            />
          )}
        </View>
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
  notesNav: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'absolute',
  },
  notesNavText: {
    color: '#383972',
    fontSize: 16,
  },
  notesList: {
    flex: 1,
  },
});

const mapStateToProps = state => ({
  userId: state.login.userId,
  notes: state.home.notes,
});

const mapDispatchToProps = dispatch => ({
  deleteNote: (uid, nid) => dispatch(deleteNote(uid, nid)),
  getNotes: value => dispatch(getNotes(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesScreen);

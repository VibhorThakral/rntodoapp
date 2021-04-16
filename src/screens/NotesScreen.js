import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import HeaderComp from '../components/homecomponents/HeaderComp';
import NoteCard from '../components/homecomponents/NoteCard';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';

class NotesScreen extends Component {
  render() {
    const {Title, Count} = this.props.route.params;
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
        <HeaderComp title={Title} count={Count} />
        <View style={styles.notesList}>
          {this.props.notes !== undefined && (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={Notes}
              keyExtractor={item => item.id}
              renderItem={item => <NoteCard notesData={item.item} />}
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
  notes: state.home.notes,
});

export default connect(mapStateToProps)(NotesScreen);

import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import BasicTextInput from '../components/formcomponents/BasicTextInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import {addNote} from '../services/Home/action';
import {connect} from 'react-redux';

class AddNoteScreen extends Component {
  state = {
    title: '',
    data: '',
  };

  getTitle = text => this.setState({title: text});
  getData = text => this.setState({data: text});

  newNote = () => {
    const {title, data} = this.state;
    this.props.addNote(this.props.userId, title, data);
    this.props.navigation.navigate('MenuScreen');
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('MenuScreen')}
          style={styles.notesNav}>
          <FeatherIcon name="chevron-left" color="#383972" size={30} />
          <Text style={styles.notesNavText}>My Notes</Text>
        </TouchableOpacity>
        <Text style={styles.heading}>
          <Text>Add </Text>
          <Text style={styles.colorBlue}>Note</Text>
        </Text>
        <View>
          <BasicTextInput
            placeholder="Title"
            keyboardType="default"
            getInput={text => this.getTitle(text)}
          />

          <BasicTextInput
            placeholder="Note"
            keyboardType="default"
            getInput={text => this.getData(text)}
            customStyle={styles.noteFieldInput}
            multiline={true}
            maxLength={500}
          />
        </View>
        <View style={styles.btnWrapper}>
          <TouchableOpacity
            onPress={() => this.newNote()}
            style={styles.addBtn}>
            <Ionicons name="ios-add-circle-outline" size={30} color="#fff" />
            <Text style={styles.addBtnText}>Add Note</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  heading: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#E62D1D',
    letterSpacing: 1.5,
    marginVertical: 20,
  },
  colorBlue: {
    color: '#383972',
  },
  noteFieldInput: {
    height: 200,
  },
  addBtn: {
    backgroundColor: '#383972',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  addBtnText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 5,
  },
  btnWrapper: {
    flex: 0.9,
    justifyContent: 'flex-end',
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
});

const mapStateToProps = state => ({
  userId: state.login.userId,
});

const mapDispatchToProps = dispatch => ({
  addNote: (id, title, data) => dispatch(addNote(id, title, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNoteScreen);

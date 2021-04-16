import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {getNotes} from '../services/Home/action';
class MenuScreen extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.userId !== this.props.userId) {
      this.props.getNotes(this.props.userId);
    }
  }

  renderCategoryList = () => {
    const categories = {};
    let lastNoteTitle;
    if (this.props.notes) {
      lastNoteTitle = this.props.notes[this.props.notes.length - 1];
    }
    this.props.notes &&
      this.props.notes.map(item => {
        const title = item.title;
        if (categories.hasOwnProperty(item.title)) {
          categories[title] += 1;
        } else {
          categories[title] = 1;
        }
      });

    const viewNotes = (Title, Count) => {
      this.props.navigation.navigate('NotesScreen', {
        Title,
        Count,
      });
    };

    return Object.entries(categories).map((item, index) => {
      let activeTitle = lastNoteTitle.title === item[0];
      return (
        <TouchableOpacity
          onPress={() => viewNotes(item[0], item[1])}
          style={styles.categoryView}
          key={index}>
          <Text
            style={[
              styles.categoryTitle,
              activeTitle && styles.activeCountTitle,
            ]}>
            {item[0]}
          </Text>
          <View
            style={[styles.countView, activeTitle && styles.activeCountView]}>
            <Text
              style={[
                styles.categoryCount,
                activeTitle && styles.activeCountText,
              ]}>
              {item[1]}
            </Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          <Text>My </Text>
          <Text style={styles.colorBlue}>Notes</Text>
        </Text>
        <ScrollView>{this.renderCategoryList()}</ScrollView>
        <View style={styles.bottomBar}>
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <Ionicons size={70} color="#383972" name="menu-outline" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('AddNoteScreen')}>
            <Ionicons name="ios-add-circle-sharp" size={70} color="#E62D1D" />
          </TouchableOpacity>
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
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#E62D1D',
    letterSpacing: 1.5,
    marginBottom: 30,
  },
  colorBlue: {
    color: '#383972',
  },
  categoryView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  categoryTitle: {
    fontSize: 32,
    color: '#383972',
    fontWeight: 'bold',
  },
  categoryCount: {
    fontSize: 32,
    color: '#383972',
    fontWeight: 'bold',
  },
  countView: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeCountView: {
    backgroundColor: 'rgba(230,45,29, 0.15)',
    borderRadius: 25,
  },
  activeCountText: {
    color: '#E62D1D',
  },
  activeCountTitle: {
    color: '#E62D1D',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const mapStateToProps = state => ({
  userId: state.login.userId,
  notes: state.home.notes,
});

const mapDispatchToProps = dispatch => ({
  getNotes: value => dispatch(getNotes(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuScreen);

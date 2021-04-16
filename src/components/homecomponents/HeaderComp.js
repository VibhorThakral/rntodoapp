import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HeaderComp = ({title, count}) => (
  <View style={styles.headerBar}>
    <Text style={styles.headerTitle}>{title}</Text>
    <View style={styles.headerCounterView}>
      <Text style={styles.headerCounter}>{count}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#E62D1D',
  },
  headerCounterView: {
    height: 50,
    width: 50,
    backgroundColor: 'rgba(230,45,29, 0.15)',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerCounter: {
    fontSize: 32,
    color: '#E62D1D',
    fontWeight: 'bold',
  },
});

export default HeaderComp;

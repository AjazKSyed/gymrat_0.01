import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class TopBarPassions extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Passions</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    height: 100,
    flexDirection: 'row', // row
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10,

    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: '#8898AA',
    shadowOpacity: 0.05,
    shadowRadius: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 15,
    paddingTop: 10,
    color: '#525F7F',
  },
});

export default TopBarPassions;
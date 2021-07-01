import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native';

class TopBarProfile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Profile</Text>
        <TouchableOpacity style={styles.settingsStyle} activeOpacity={0.5}
        onPress={()=>{this.props.navigation.nagate('SettingsScreen.js')}}>
          <Image
            source={require('../../assets/settings.png')}
            style={styles.ImageIconStyle}
          />
        </TouchableOpacity>
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
  settingsStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 40,
    borderRadius: 5,
    margin: 10,
    paddingTop: 10,
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 30,
    width: 30,
    resizeMode: 'stretch',
  },
});

export default TopBarProfile;
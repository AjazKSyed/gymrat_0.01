import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native';

class TopBarDiscovery extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Discovery</Text>
        <TouchableOpacity style={styles.notificationStyle} activeOpacity={0.5}
                    onPress={()=>{alert("Checking Notification")}}
                    >
          <Image
            source={require('../../assets/notification.png')}
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
  notificationStyle: {
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

export default TopBarDiscovery;
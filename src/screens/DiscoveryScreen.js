import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import TopBarDiscovery from '../components/TopBarDiscovery';
import Constants from 'expo-constants';
import DiscoveryCalls from '../components/DiscoveryCalls';

const DiscoveryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      <TopBarDiscovery></TopBarDiscovery>
      <View style={styles.Details}>
        <DiscoveryCalls></DiscoveryCalls>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#FFFFFF',
    height: Constants.statusBarHeight
  },

  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  Details: {
    flex: 1,
   },

});

export default DiscoveryScreen;
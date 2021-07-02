import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import TopBarMischeif from '../components/TopBarMischeif';
import Constants from 'expo-constants';
import MischeifCalls from '../components/MischeifCalls';

const MischeifScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      <TopBarMischeif></TopBarMischeif>
      <View style={styles.Details}>
        <MischeifCalls></MischeifCalls>
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
    alignContent: 'center',
  },
});

export default MischeifScreen;
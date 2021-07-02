import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import TopBarProfile from '../components/TopBarProfile';
import APICalls from '../components/APICalls';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      <TopBarProfile navigation="SettingsScreen"></TopBarProfile>
      <View style={styles.UserDetails}>
        <APICalls></APICalls>
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
  UserDetails: {
    marginHorizontal: 28,
    alignContent: 'center',
  },

});

export default ProfileScreen;
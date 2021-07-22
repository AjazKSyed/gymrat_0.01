import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import TopBarProfile from '../components/TopBarProfile';
import User from '../components/User';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      <TopBarProfile navigation="SettingsScreen"></TopBarProfile>
      <View style={styles.UserDetails}>
        <User></User>
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
    flex: 1,

    marginHorizontal: 25,
    alignContent: 'center',
  },

});

export default ProfileScreen;
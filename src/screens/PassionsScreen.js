import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import TopBarPassions from '../components/TopBarPassions';
import Constants from 'expo-constants';

const PassionsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      <TopBarPassions></TopBarPassions>
      <View style={styles.PassionLayoutContainer}>
        <View style={styles.PassionsLayout1}>
            <TouchableOpacity style={styles.PassionButton} activeOpacity={0.8} onPress={()=>{alert("Editing Passion")}}>
              <Image
                source={require('../../assets/Passions/Passion01-inactive.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.PassionButton} activeOpacity={0.8} onPress={()=>{alert("Editing Passion")}}>
              <Image
                source={require('../../assets/Passions/Passion02-inactive.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.PassionButton} activeOpacity={0.8} onPress={()=>{alert("Editing Passion")}}>
              <Image
                source={require('../../assets/Passions/Passion03-active.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.PassionButton} activeOpacity={0.8} onPress={()=>{alert("Editing Passion")}}>
              <Image
                source={require('../../assets/Passions/Passion04-inactive.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.PassionButton} activeOpacity={0.8} onPress={()=>{alert("Editing Passion")}}>
              <Image
                source={require('../../assets/Passions/Passion05-inactive.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.PassionButton} activeOpacity={0.8} onPress={()=>{alert("Editing Passion")}}>
              <Image
                source={require('../../assets/Passions/Passion06-inactive.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.PassionButton} activeOpacity={0.8} onPress={()=>{alert("Editing Passion")}}>
              <Image
                source={require('../../assets/Passions/Passion07-inactive.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.PassionButton} activeOpacity={0.8} onPress={()=>{alert("Editing Passion")}}>
              <Image
                source={require('../../assets/Passions/Passion08-active.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.PassionsLayout1}>
            <TouchableOpacity style={styles.PassionButton} activeOpacity={0.8} onPress={()=>{alert("Editing Passion")}}>
              <Image
                source={require('../../assets/Passions/Passion09-inactive.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.PassionButton} activeOpacity={0.8} onPress={()=>{alert("Editing Passion")}}>
              <Image
                source={require('../../assets/Passions/Passion10-inactive.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.PassionButton} activeOpacity={0.8} onPress={()=>{alert("Editing Passion")}}>
              <Image
                source={require('../../assets/Passions/Passion11-active.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.PassionButton} activeOpacity={0.8} onPress={()=>{alert("Editing Passion")}}>
              <Image
                source={require('../../assets/Passions/Passion12-inactive.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.PassionButton} activeOpacity={0.8} onPress={()=>{alert("Editing Passion")}}>
              <Image
                source={require('../../assets/Passions/Passion13-inactive.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.PassionButton} activeOpacity={0.8} onPress={()=>{alert("Editing Passion")}}>
              <Image
                source={require('../../assets/Passions/Passion14-inactive.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.PassionButton} activeOpacity={0.8} onPress={()=>{alert("Editing Passion")}}>
              <Image
                source={require('../../assets/Passions/Passion15-active.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.PassionButton} activeOpacity={0.8} onPress={()=>{alert("Editing Passion")}}>
              <Image
                source={require('../../assets/Passions/Passion16-inactive.png')}
              />
            </TouchableOpacity>
          </View>
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
  PassionLayoutContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  PassionsLayout1: {
    paddingTop: 30,
  },
  PassionButton: {
    paddingVertical: 15,

  },

});
export default PassionsScreen;
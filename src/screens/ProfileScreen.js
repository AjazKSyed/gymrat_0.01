import React from 'react';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import TopBarProfile from '../components/TopBarProfile';


const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.statusBar} />
      <TopBarProfile></TopBarProfile>
      <View style={styles.ProfileItems}>

        <View style={styles.ProfilePictureItems}>
          <Image style={styles.profilePic}
            // REPLACE WITH USER IMAGE
            source ={require('../../assets/ProfilePicture.png')}>
          </Image>

          <TouchableOpacity style={styles.editProfilePicture} activeOpacity={0.8} onPress={()=>{alert("Editing Image")}}>
            <Image
              // Navigate to Image Editor
              source={require('../../assets/editProfilePicture.png')}
              style={styles.ImageIconStyle}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.UserDetails}
          // Replace with API Calls
        >
          <Text style={styles.h2}>Ajaz Syed, 21</Text>
          <Text style={styles.h3}>Seattle</Text>
        </View>

        <TouchableOpacity style={styles.editProfile} activeOpacity={0.8} onPress={()=>{alert("Editing Profile")}}>
            <Image
              // Navigate to Profile Editor
              source={require('../../assets/EditButton.png')}
              style={styles.editStyle}
            />
        </TouchableOpacity>

        <View style={styles.UserAdddionals}
          // Replace with API Calls
        >
          <Text style={styles.h4}>Bio</Text>
          <Image style={styles.bio}
            // REPLACE WITH BIO
            source ={require('../../assets/Input.png')}>
          </Image>
          <Text style={styles.h5}>Instagram</Text>
          <Text style={styles.h5}>Spotify</Text>
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
  ProfileItems: {
    alignItems: 'center',
  },

  ProfilePictureItems: {
    flex: 1,
  },

  profilePic: {
    marginTop: 40,
  },
  editProfilePicture: {
    marginLeft: 104,
    marginTop: -46,
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 36,
    width: 36,
    resizeMode: 'stretch',
  },
  UserDetails: {
    marginTop: 190,
  },
  h2: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 10,
    color: '#000000',
  },
  h3: {
    textAlign: 'center',
    fontSize: 16,
    paddingTop: 5,
    color: '#000000',
  },

  editProfile: {
    paddingTop: 15,
  },
  editStyle: {
    width: 90,
    height: 27.62,
  },
  UserAdddionals: {
    paddingTop: 5,
  },
  h4: {
    textAlign: 'left',
    fontSize: 17,
    fontWeight: 'bold',
    opacity: .8,
    paddingVertical: 10,
    color: '#110C21',
  },
  h5: {
    textAlign: 'left',
    fontSize: 17,
    fontWeight: 'bold',
    opacity: .8,
    paddingVertical: 25,
    color: '#110C21',
  },

});

export default ProfileScreen;
import React, {useState, useEffect}from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { render } from 'react-dom';

export default function User() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState();


    useEffect(() => {
        fetch('https://randomuser.me/api/')
        .then((response) => response.json())
        .then((json) => setData(json['results']['0']))
        .catch((error) => console.error(error))
        .finally(()=>setLoading(false));
    }, []);

      return (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style>
            <View style={styles.ViewedItems}>
              <TouchableOpacity  activeOpacity={0.8} onPress={()=>{alert("Editing Image")}}>
                  <Image
                    source = {{
                      uri: !isLoading && data.picture.large
                  }}
                  style={styles.picture}
                  >
                  </Image>
                  </TouchableOpacity>
            </View>

            <View>
                  <Text style={styles.h2}>
                    {!isLoading && data.name.first} {!isLoading && data.name.last}, {!isLoading && data.dob.age}
                  </Text>
                  <Text style={styles.h3}>
                  {!isLoading && data.location.city}, {!isLoading && data.location.state}
                  </Text>
                  <TouchableOpacity style={styles.editProfile} activeOpacity={0.8} onPress={()=>{alert("Editing Profile")}}>
                    <Image
                    // Navigate to Profile Editor
                    source={require('../../assets/EditButton.png')}
                    />
                  </TouchableOpacity>
            </View>

            <View style={styles.textItems}
                  // Replace with API Calls
                >
              <Text style={styles.h4}>Bio</Text>
              <Image style={styles.bio}
                  // REPLACE WITH BIO
                source ={require('../../assets/Input.png')}>
              </Image>
              <Text style={styles.h4}>Instagram</Text>
              <Text style={styles.h5}> instagram.com/{!isLoading && data.login.username} </Text>
              <Text style={styles.h4}>Spotify</Text>
              <Text style={styles.h5}> spotify.com/{!isLoading && data.login.username} </Text>
            </View>
        </View>
      </ScrollView>

      )

}
const styles = StyleSheet.create({
  ViewedItems: {
    flexDirection: 'column',
    alignItems:'center',
  },

  textItems: {
    paddingTop: 5,
  },

  picture: {
    height: 145,
    width: 145,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#525F7F',
      marginTop: 50,
      marginBottom: 5,
  },

  h2: {
    fontSize: 23,
    textAlign: 'center',
    paddingTop: 5,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 5,
  },
  editProfile: {
    alignSelf: 'center',
    paddingTop: 15,
  },

  bio: {
    resizeMode: 'contain',
    aspectRatio: 2,
  },
  h4: {
    fontSize: 18,
    textAlign: 'left',
    fontWeight: 'bold',
    opacity: .8,
    paddingVertical: 10,
    color: '#110C21',
  },
  h5: {
    fontSize: 16,
    textAlign: 'left',
    paddingLeft: 15,
    paddingVertical: 10,
    color: '#525F7F',
  }
});

import React, { Component } from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Image, Text, View } from 'react-native';

export default class APICalls extends Component {
  state = {
    data: []
  };

  componentDidMount () {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const json = await response.json();
    this.setState({data: json.results});
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList style={styles.NameInformation}
          data={this.state.data}
          keyExtractor={(x,i) => i.toString()}
          renderItem={({item}) => {
            return(
              <React.Fragment>

                <View style={styles.ViewedItems}>
                  <Image
                    style={styles.profilePicture}
                    source={{uri: `${item.picture.large}`}}
                  >
                  </Image>
                  <TouchableOpacity style={styles.editProfilePicture} activeOpacity={0.8} onPress={()=>{alert("Editing Image")}}>
                    <Image
                    // Navigate to Image Editor
                    source={require('../../assets/editProfilePicture.png')}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.TextItems}>
                  <Text style={styles.h2}>
                    {`${item.name.first} ${item.name.last}, ${item.dob.age}`}
                  </Text>
                  <Text style={styles.h3}>
                  {`${item.location.city}, ${item.location.state}`}
                  </Text>
                </View>

                <View style={styles.EditItems}>
                  <TouchableOpacity style={styles.editProfile} activeOpacity={0.8} onPress={()=>{alert("Editing Profile")}}>
                    <Image
                    // Navigate to Profile Editor
                    source={require('../../assets/EditButton.png')}
                    />
                  </TouchableOpacity>
                </View>

                <View style={styles.AdditionalItems}
                  // Replace with API Calls
                >
                  <Text style={styles.h4}>Bio</Text>
                  <Image style={styles.bio}
                  // REPLACE WITH BIO
                    source ={require('../../assets/Input.png')}>
                  </Image>
                  <Text style={styles.h4}>Instagram</Text>
                    <Text style={styles.h5}>
                    {`instagram.com/${item.login.username}`}
                    </Text>
                  <Text style={styles.h4}>Spotify</Text>
                    <Text style={styles.h5}>
                      {`spotify.com/${item.login.username}`}
                    </Text>
                </View>
              </React.Fragment>
            );
          }
        }
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  NameInformation: {
    paddingTop: 30,
  },

  ViewedItems: {
    flexDirection: 'row',
    marginHorizontal: 112,
  },
  TextItems: {},
  EditItems: {
    marginHorizontal: 112,
  },

  profilePicture: {
    height: 145,
    width: 145,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#525F7F',
  },
  editProfilePicture: {
    marginLeft: -40,
    marginTop: 110,
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

  AdditionalItems: {
    paddingTop: 5,
  },
  h4: {
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    opacity: .8,
    paddingVertical: 10,
    color: '#110C21',
  },
  h5: {
    textAlign: 'left',
    paddingLeft: 15,
    fontSize: 16,
    paddingVertical: 10,
    color: '#525F7F',
  }
});
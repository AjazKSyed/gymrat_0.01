import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import {  FlatList,  StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

function ProfileScreen() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.editButton} onPress={()=>{alert("Editing Profile")}}>
          <Image source={require("./assets/EditButton.png")}/>
        </TouchableOpacity>

        <Image style={styles.profilePic}
        source ={require('../profilePage/Profile/ProfilePhoto.png')}></Image>

        <View style={styles.nameAge}>
          <Text style={styles.name}> Ajaz,</Text>
          <Text style={styles.age}>21</Text>
        </View>


        <View style={styles.location}>
          <Text style={styles.locationName}>Seattle, Washington</Text>
        </View>

        <View style={styles.bioHeader}>
          <Text style={styles.title1}>Bio</Text>
        </View>
        <View style={styles.bioBody}>
          <Text style={styles.body1}>There isn't much text here for a reason, but this is sample words.</Text>
        </View>

        <View style={styles.linksHeader}>
          <Text style={styles.linksHeaderText}>Links</Text>
        </View>
        <View style={styles.links}>
          <Text style={styles.instagram}>Instagram</Text>
          <Text style={styles.spotify}>Spotify</Text>
        </View>
    </View>
  );
}

function DiscoveryScreen() {
  return (
    <View style={styles.emptyContainer}>
      <Text>Discover</Text>
    </View>
  );
}

function PassionsScreen() {
  return (
    <View style={styles.emptyContainer}>
      <Text>Passions</Text>
    </View>
  );
}

function MischeifScreen() {
  return (
    <View style={styles.emptyContainer}>
      <Text>Mischeif</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Discovery') {
              iconName = focused ? 'ios-search' : 'ios-search-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person' : 'ios-person-outline';
            } else if (route.name === 'Passions') {
              iconName = focused ? 'ios-flame' : 'ios-flame-outline';
            } else if (route.name === 'Mischeif') {
              iconName = focused ? 'ios-help' : 'ios-help-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#008DA0',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Discovery" component={DiscoveryScreen} />
        <Tab.Screen name="Passions" component={PassionsScreen} />
        <Tab.Screen name="Mischeif" component={MischeifScreen} />

      </Tab.Navigator>
    </NavigationContainer>


  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  editButton: {
    paddingTop: 40,
    paddingHorizontal: 386,
  },
  profilePic: {
    marginTop: 65,
    marginHorizontal: 122,
  },
  nameAge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  nameAgeSub: {
    flexDirection: 'row',

  },

  name: {
    paddingTop: 20,
    paddingHorizontal: 5,
    fontSize: 23,
    fontWeight: 'bold',
  },
  age: {
    paddingTop: 20,
    paddingHorizontal: 5,
    fontSize: 23,
    fontWeight: 'bold',
  },

  location: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  locationName: {
    fontSize: 16,
    marginHorizontal: 0,
  },

  bioHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 22,
  },
  title1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bioBody: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 14,
  },
  body1: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 16,
    marginHorizontal: 50,
  },

  linksHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 200,

  },
  linksHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  links: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 30,
  },
  instagram: {
    fontSize: 16,
    fontWeight: '400',
  },
  spotify: {
    fontSize: 16,
    fontWeight:'400',
  },

  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },


});

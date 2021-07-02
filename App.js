import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ProfileScreen from './src/screens/ProfileScreen'
import DiscoveryScreen from './src/screens/DiscoveryScreen'
import PassionsScreen from './src/screens/PassionsScreen'
import MischeifScreen from './src/screens/MischeifScreen'


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: 'white',
            height: 80,
            marginBottom: 5,
            marginTop: 5,
            paddingTop: 25,
            paddingBottom: 25,
          },
          activeTintColor: "#525F7F",
          inactiveTintColor: "#9B9B9B",
        }}>

        <Tab.Screen name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({focused}) => {
                if(focused) {
                  return(<Image style={{ width: 40, height: 40 }} source={require('./assets/Profile-active.png')}/>);
                } else {
                  return(<Image style={{ width: 40, height: 40 }} source={require('./assets/Profile-inactive.png')}/>);
                }
            },
          }}
        />
        <Tab.Screen name="Discovery"
          component={DiscoveryScreen}
          options={{
            tabBarIcon: ({focused}) => {
                if(focused) {
                  return(<Image style={{ width: 40, height: 40 }} source={require('./assets/Discovery-active.png')}/>);
                } else {
                  return(<Image style={{ width: 40, height: 40 }} source={require('./assets/Discovery-inactive.png')}/>);
                }
            },
          }}
        />
        <Tab.Screen name="Passions"
          component={PassionsScreen}
          options={{
            tabBarIcon: ({focused}) => {
                if(focused) {
                  return(<Image style={{ width: 40, height: 40 }} source={require('./assets/Passions-active.png')}/>);
                } else {
                  return(<Image style={{ width: 40, height: 40 }} source={require('./assets/Passions-inactive.png')}/>);
                }
            },
          }}
        />
        <Tab.Screen name="Mischeif"
          component={MischeifScreen}
          options={{
            tabBarIcon: ({focused}) => {
                if(focused) {
                  return(<Image style={{ width: 40, height: 40 }} source={require('./assets/Mischeif-active.png')}/>);
                } else {
                  return(<Image style={{ width: 40, height: 40 }} source={require('./assets/Mischeif-inactive.png')}/>);
                }
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>


  );
}

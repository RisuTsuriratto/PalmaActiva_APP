import * as React from 'react';
import { View, Image, Pressable, ScrollView, StyleSheet, Dimensions, Text } from 'react-native';
import Constants from 'expo-constants';


// Imports Custom Components
import DeviceInfo from './components/DeviceInfo';

import Home from './components/HomePage';
import List from './components/ListPage';

import FixedMenu from './components/FixedMenu';
import FixedMenuComponent from './components/FixedMenu_Component';

import Header from './components/HeaderMenu';

// Import Navigation Stuff
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// Create Menu Navigator
const Tab = createBottomTabNavigator();

// App
export default function App() {

  // Controla el nombre del usuario
  var userText;
  var user = 'user';
  var nameUser;

  if (user != 'user') {
    userText = nameUser;
  } else {
    userText = "Usuari";
  }

  // Style
  const styles = StyleSheet.create({
    buttonMenu: {
      width: 60,
      height: 65,
      marginHorizontal: '0.55rem',
      alignItems: 'center',
      justifyContent: 'center',
    },

    iconTitle: {
      color: '#ffffff',
      fontWeight: 'bold',
    },
    
  });

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} 
          options={({ navigation }) => ({
            headerStyle:  {height: 0}, 

            tabBarButton: (props) => (
              <Pressable style = {styles.buttonMenu} onPress={() => navigation.navigate('Home')}>
                <Image source = {require('./assets/Icons/inici-icon.svg')} />
                <Text style={styles.iconTitle}> Inici </Text>
              </Pressable>
            ), 

            tabBarStyle: {backgroundColor: '#E03E52', height: 65}, 
          })}
        />
        
        <Tab.Screen name="Cursos" component={List}
           options={({ navigation }) => ({
            headerStyle:  {height: 0}, 
            headerTitleStyle: {display: 'none'},

            tabBarButton: (props) => (
              <Pressable style = {styles.buttonMenu} onPress={() => navigation.navigate('Cursos')}>
                <Image source = {require('./assets/Icons/cursos-icon.svg')} />
                <Text style={styles.iconTitle}> Cursos </Text>
              </Pressable>
            ), 

            tabBarStyle: {backgroundColor: '#E03E52', height: 65}, 
          })}
        />
        <Tab.Screen name="Ofertes" component={List} 
            options={({ navigation }) => ({
            headerStyle:  {height: 0}, 
            headerTitleStyle: {display: 'none'},

            tabBarButton: (props) => (
              <Pressable style = {styles.buttonMenu} onPress={() => navigation.navigate('Ofertes')}>
                <Image source = {require('./assets/Icons/ofertes-icon.svg')} />
                <Text style={styles.iconTitle}> Ofertes </Text>
              </Pressable>
            ), 

            tabBarStyle: {backgroundColor: '#E03E52', height: 65}, 
          })}
        />
        <Tab.Screen name="Usuari" component={'none'} 
            options={({ navigation }) => ({
            headerStyle:  {height: 0}, 
            headerTitleStyle: {display: 'none'},

            tabBarButton: (props) => (
              <Pressable style = {styles.buttonMenu} onPress={() => navigation.navigate('Usuari')}>
                <Image source = {require('./assets/Icons/usuari-icon.svg')} />
                <Text style={styles.iconTitle}> {userText} </Text>
              </Pressable>
            ), 

            tabBarStyle: {backgroundColor: '#E03E52', height: 65}, 
          })}
        />
      </Tab.Navigator>

    </NavigationContainer>
    
  );
}


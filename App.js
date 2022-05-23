import * as React from 'react';
import { View, Image, Pressable, ScrollView, StyleSheet, Dimensions, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import SplashScreen from 'react-native-splash-screen';
import { useEffect } from 'react';

// Imports Custom Components
import Home from './components/HomePage';
import List from './components/ListPage';
import Details from './components/Details_ListItem';

import Header from './components/HeaderMenu';

// Import Navigation Stuff
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import Dropdown Stuff
import DropDownPicker from 'react-native-dropdown-picker'


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
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: '0.645rem'
    },

    iconTitle: {
      color: '#ffffff',
      fontWeight: 'bold',
    },
    
  });

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator headerMode="screen">
          <Tab.Screen name="Home" component={Home} 
            options={({ navigation }) => ({
              headerStyle:  {height: 0}, 

              tabBarButton: (props) => (
                <Pressable style = {styles.buttonMenu} onPress={() => navigation.navigate('Home')}>
                  <Image source = {require('./assets/Icons/inici-icon.png')} />
                  <Text style={styles.iconTitle}> Inici </Text>
                </Pressable>
              ), 

              tabBarStyle: {backgroundColor: '#E03E52', height: 'auto'}, 
            })}
          />
          
          <Tab.Screen name="Cursos" component={List}
            options={({ navigation }) => ({
              headerStyle:  {height: 0}, 

              tabBarButton: (props) => (
                <Pressable style = {styles.buttonMenu} onPress={() => navigation.navigate('Cursos')}>
                  <Image source = {require('./assets/Icons/cursos-icon.png')} />
                  <Text style={styles.iconTitle}> Cursos </Text>
                </Pressable>
              ), 

              tabBarStyle: {backgroundColor: '#E03E52', height: 'auto'}, 
            })}
          />
          <Tab.Screen name="Ofertes" component={List} 
              options={({ navigation }) => ({
              headerStyle:  {height: 0}, 

              tabBarButton: (props) => (
                <Pressable style = {styles.buttonMenu} onPress={() => navigation.navigate('Ofertes')}>
                  <Image source = {require('./assets/Icons/ofertes-icon.png')} />
                  <Text style={styles.iconTitle}> Ofertes </Text>
                </Pressable>
              ), 

              tabBarStyle: {backgroundColor: '#E03E52', height: 'auto'}, 
            })}
          />
          <Tab.Screen name="Usuari" component={'none'} 
            options={({ navigation }) => ({
              headerStyle:  {height: 0}, 

              tabBarButton: (props) => (
                <Pressable style = {styles.buttonMenu} onPress={() => navigation.navigate('Usuari')}>
                  <Image source = {require('./assets/Icons/usuari-icon.png')} />
                  <Text style={styles.iconTitle}> {userText} </Text>
                </Pressable>
              ), 

              tabBarStyle: {backgroundColor: '#E03E52', height: 'auto'},
            })}
          />
          <Tab.Screen name="Detall" component={Details} 
            options={({ navigation }) => ({
              headerStyle:  {height: 0},

              tabBarButton: (props) => (
                <View style = {{ display: 'none' }}></View>
              ), 

              tabBarStyle: {backgroundColor: '#E03E52', height: 'auto'}, 
            })}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    
  );
}


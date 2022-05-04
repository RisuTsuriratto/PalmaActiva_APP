import * as React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';

import Home from '../components/HomePage';
import Cursos from '../components/ListPage';


import Title from '../components/HeaderTitle';

// Import Navigation Stuff
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


// Fixed Menu
export default function FixedMenu({ navigation }) {

  return (
    <Tab.Navigator style = {styles.container}>
      <Tab.Screen name= "Home" component={Home} 
        options={({ navigation }) => ({
          
          tabBarButton: (props) => (
            <Pressable style = {styles.buttonMenu} onPress={() => navigation.navigate('Home')}>
              <Image source = {require('../assets/Icons/inici-icon.svg')} />
              <Text style={styles.iconTitle}> Inici </Text>
            </Pressable>
          ), 
          
          headerStyle: {height: 0},
          tabBarStyle: {backgroundColor: '#E03E52', height: 65} 
        })}
      />

      <Tab.Screen name= "Cursos" component={Cursos} 
        options={({ navigation }) => ({
          
          tabBarButton: (props) => (
            <Pressable style = {styles.buttonMenu} onPress={() => navigation.navigate('Cursos')}>
              <Image source = {require('../assets/Icons/cursos-icon.svg')} />
              <Text style={styles.iconTitle}> Cursos </Text>
            </Pressable>
          ), 
          
          // Header style
          headerStyle: {backgroundColor: '#E03E52', alignItems: 'flex-end', height: 45, marginTop: 12},
          headerTitleStyle: {
            display: 'none',
          },

          // Renderiza el botón de volver y el titulo
          headerLeft: (props) => ( 'none' ),
          headerRight: (props) => ( <Title title="Cursos"/> ),

          // Menu Style
          tabBarStyle: {backgroundColor: '#E03E52', height: 65}, 
        })}
      />

      <Tab.Screen name= "Ofertes" component={Cursos} 
        options={({ navigation }) => ({
          
          tabBarButton: (props) => (
            <Pressable style = {styles.buttonMenu} onPress={() => navigation.navigate('Ofertes')}>
              <Image source = {require('../assets/Icons/ofertes-icon.svg')} />
              <Text style={styles.iconTitle}> Ofertes </Text>
            </Pressable>
          ), 
          
            // Header style
          headerStyle: {backgroundColor: '#E03E52', alignItems: 'flex-end',  height: 45},
          headerTitleStyle: {
            display: 'none',
          },

          // Renderiza el botón de volver y el titulo
          headerLeft: (props) => ( 'none' ),
          headerRight: (props) => ( <Title title="Ofertes"/> ),

          tabBarStyle: {backgroundColor: '#E03E52', height: 65}, 
        })}
      />

      <Tab.Screen name= "Usuari" component={Cursos} 
        options={({ navigation }) => ({
          
          tabBarButton: (props) => (
            <Pressable style = {styles.buttonMenu} onPress={() => navigation.navigate('Usuari')}>
              <Image source = {require('../assets/Icons/usuari-icon.svg')} />
              <Text style={styles.iconTitle}> Usuari </Text>
            </Pressable>
          ), 
          
            // Header style
          headerStyle: {backgroundColor: '#E03E52', alignItems: 'flex-end',  height: 45},
          headerTitleStyle: {
            display: 'none',
          },

          // Renderiza el botón de volver y el titulo
          headerLeft: (props) => ( 'none' ),
          headerRight: (props) => ( <Title title="Perfil de l'usuari"/> ),

          tabBarStyle: {backgroundColor: '#E03E52', height: 65}, 
        })}
      />

    </Tab.Navigator>
  );
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


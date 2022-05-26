import * as React from 'react';
import { View, Image, Pressable, ScrollView, StyleSheet, Dimensions, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';

// Imports Custom Components
import Home from './components/HomePage';
import List from './components/ListPage';
import DetailCursos from './components/Details_Cursos';
import DetailOfertes from './components/Details_Ofertes';

import Header from './components/HeaderMenu';
import Login from './components/LoginPage';

// Import Navigation Stuff
import { NavigationContainer } from '@react-navigation/native';
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

  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide({fade: true});
    }, 3000);
  }, []);

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
          <Tab.Screen name="Usuari" component={Login} 
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
          <Tab.Screen name="Detall del curs" component={DetailCursos} 
            options={({ navigation }) => ({
              headerStyle:  {height: 0},

              tabBarButton: (props) => (
                <View style = {{ display: 'none' }}></View>
              ), 

              tabBarStyle: {backgroundColor: '#E03E52', height: 'auto'}, 
            })}
          />
          <Tab.Screen name="Detall de l'oferta" component={DetailOfertes} 
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


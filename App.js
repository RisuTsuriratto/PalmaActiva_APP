import * as React from 'react';
import { View, Image, Pressable, ScrollView, StyleSheet, Dimensions, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';

// Imports Custom Components
import Home from './components/HomePage';
import List from './components/ListPage';
import Details from './components/Details_ListItem';
import Header from './components/HeaderMenu';
import Login from './components/LoginPage';
import Register from './components/RegisterPage';

// Import Navigation Stuff
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Import Dropdown Stuff
import DropDownPicker from 'react-native-dropdown-picker';

// Import Localisation Stuff
import i18n from './components/i18n';

// Create Menu Navigator
const Tab = createBottomTabNavigator();

// App
export default function App() {

  // Controla el nombre del usuario
  var userText;
  var user = 'user';
  var nameUser;

  function getUser() {
    if (user != 'user') {
      return nameUser;
    } else {
      return i18n.t('Navigator.Usuari');
    }
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
          <Tab.Screen name="Register" component={Register} 
            options={({ navigation }) => ({
              headerStyle:  {height: 0}, 

              tabBarButton: (props) => (
                <Pressable style = {styles.buttonMenu} onPress={() => navigation.navigate('Register')}>
                  <Image source = {require('./assets/Icons/inici-icon.png')} />
                  <Text style={styles.iconTitle}> {i18n.t('Navigator.Inici')} </Text>
                </Pressable>
              ), 

              tabBarStyle: {backgroundColor: '#E03E52', height: 'auto'}, 
            })}
          />
          
          <Tab.Screen name="Cursos" component={List}
            options={({ navigation }) => ({
              header: () => <Header style={{position: 'static'}}/>, 

              tabBarButton: (props) => (
                <Pressable style = {styles.buttonMenu} onPress={() => navigation.navigate('Cursos')}>
                  <Image source = {require('./assets/Icons/cursos-icon.png')} />
                  <Text style={styles.iconTitle}> {i18n.t('Navigator.Cursos')} </Text>
                </Pressable>
              ), 

              tabBarStyle: {backgroundColor: '#E03E52', height: 'auto'}, 
            })}
          />
          <Tab.Screen name="Ofertes" component={List} 
              options={({ navigation }) => ({
              header: () => <Header/>, 

              tabBarButton: (props) => (
                <Pressable style = {styles.buttonMenu} onPress={() => navigation.navigate('Ofertes')}>
                  <Image source = {require('./assets/Icons/ofertes-icon.png')} />
                  <Text style={styles.iconTitle}> {i18n.t('Navigator.Ofertes')} </Text>
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
                  <Text style={styles.iconTitle}> {getUser()} </Text>
                </Pressable>
              ), 

              tabBarStyle: {backgroundColor: '#E03E52', height: 'auto'},
            })}
          />
          <Tab.Screen name="Detall" component={Details} 
            options={({ navigation }) => ({
               header: () => <Header/>,

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


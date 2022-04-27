import * as React from 'react';
import { View, ScrollView, StyleSheet, Dimensions, Text } from 'react-native';
import Constants from 'expo-constants';

// Imports Custom Components
import FixedMenu from './components/FixedMenu';
import DeviceInfo from './components/DeviceInfo';

import Home from './components/HomePage';
import Cursos from './components/CursosPage';

// Import Navigation Stuff
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


// App
export default function App() {
  return (
    <NavigationContainer>
      <DeviceInfo/>
        <View > 
          <Text> Hola soy lo que sea </Text>
        </View>
        <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen name="Home" component={Home} options = {{ headerStyle: {
            backgroundColor: '#E03E52'},
            
            headerTintColor: '#fff',

            headerTitleStyle: {
              fontWeight: 'bold', alignItems: 'flex-end'
          },}}/>
          <Stack.Screen name="Cursos" component={Cursos} options = {{ headerStyle: {
            backgroundColor: '#E03E52'}, }}/>
        </Stack.Navigator>


      <FixedMenu/>
    </NavigationContainer>
  );
}

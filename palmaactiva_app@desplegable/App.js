import * as React from 'react';
import { View, Image, Pressable, ScrollView, StyleSheet, Dimensions, Text } from 'react-native';
import Constants from 'expo-constants';

// Imports Custom Components
// import FixedMenu from './components/FixedMenu';
import DeviceInfo from './components/DeviceInfo';

import Home from './components/HomePage';
import Cursos from './components/CursosPage';
import FixedMenu from './components/FixedMenu';

// Import Navigation Stuff
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Dropdown Stuff
import DropDownPicker from 'react-native-dropdown-picker'

const Stack = createNativeStackNavigator();


// App
export default function App() {
  return (

    <NavigationContainer>
      <DeviceInfo/>
      <Stack.Navigator initialRouteName="FixedMenu" >
        <Stack.Screen name="FixedMenu" component={FixedMenu} options = {{headerStyle:  {height: 0}}}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Cursos" component={Cursos}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
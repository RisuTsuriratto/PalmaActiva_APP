import * as React from 'react';
import { useState } from 'react';

import { View, Text, TextInput, StyleSheet, Pressable, Image, Dimensions } from 'react-native';

import HeaderTitle from './HeaderTitle';

import { useRoute } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function HeaderMenu({navigation}) {
  // Variables
  var route = useRoute();
  var routeName = route.name;


  const [searchText, setText] = useState('');

  var whatToSearch = 'Cerca ';
  whatToSearch += routeName.toLowerCase();

  // Funciones para los botones
  function search() {
    if (searchText != "" && searchText != " ") {
      console.log({searchText});
      TextInput.setText = setText("");
    }
  }

  function openFilter() {
    console.log("Abro filtros");
  }

  function goHome( ) {
    console.log("Voy a Inici");

  }

   function logIn() {
    console.log("Log In");
  }

  // Header
    return (
      <View style = {styles.container}>
        <View style = {styles.flex}> 
          <Pressable onPress={ goHome }>
            <Image source = {require('../assets/Logos/Isotipo.svg')} />
          </Pressable>
          
          <Pressable onPress={ logIn } style = {{borderColor: '#fff', borderWidth: 2,  width: '13rem', height: 49}}>
            <Text style = {{color: '#fff', fontSize: 15, fontWeight: 'bold', alignSelf: 'center', justifyContent: 'center', paddingTop: '0.7rem'}}> 
              Inici de sessió 
            </Text>
          </Pressable>
        </View>

        <View style= {{position: 'relative', marginVertical: 12}}>
          <TextInput
            style = { styles.input }
            placeholder = { whatToSearch }
            placeholderTextColor = "#A2ACAB"
            maxLength = { 25 }
            onChangeText = { searchText => setText(searchText) }
            onBlur = { search }
            value = { searchText }
          />

          <Pressable onPress = { search } style= {{ position: 'absolute', top: 7, left: 5}}>
            <Image source = {require('../assets/Icons/search-icon.svg')}/>
          </Pressable>

          <Pressable onPress = { openFilter } style = {{backgroundColor: '#E03E52', borderColor: '#ffffff', borderWidth: 2,  width: '94px', position: 'absolute', right: 0, top: 0, bottom: 0 }}>
            <Text style = {{color: '#fff', fontSize: 15, fontWeight: 'bold', alignSelf: 'center', paddingTop: 11}}> Filtres </Text>
          </Pressable>
        </View>
        
        <View style = {styles.flex}>
          <Pressable style = {{flexDirection: 'row', alignItems: 'center', marginBottom: '0.5rem'}} onPress = { goHome }>
            <Image source = {require('../assets/Icons/back-icon.svg')} />
            <Text style = {{ color: '#ffffff', fontWeight: 600, fontSize: '1.1rem', marginLeft: '0.3rem', paddingBottom: 3}}> Tornar </Text>
          </Pressable>
          
          <HeaderTitle title = {routeName} />
        </View>
      </View>
    );
} 

// Get heigth of screen
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E03E52',
    paddingHorizontal: 12,
    paddingTop: 15,
  },

  flex: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  input: {
    height: 49,
    backgroundColor: '#ffffff',
    padding: 10,
    paddingLeft: 45,
    paddingRight: 100,
    fontSize: 18,
    outline: 'none'
  },

  
});

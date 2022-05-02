import React, {useState} from 'react';
import { Text, View, Image, Button, Pressable, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

import FixedMenu from './FixedMenu';

import DropDown from './DropDown';

// Home Page
export default function HomePage({ navigation }) {
  function goCursos() {
    navigation.navigate('Cursos');
  }

  function goOfertas() {
    navigation.navigate('Ofertes');
  }

  function showIdiomas(){
    return <DropDown/>;
  }

  const [isVisible, setIsVisible] = useState(true);

  return (
      <View style = {{ backgroundColor: '#ffffff' }}>
      
        <View style = {styles.main}>
          
       <Pressable style = {styles.idioma} 
       onPress={() => {
         setIsVisible(!isVisible);}}>
        <Image source = {require('../assets/Icons/idioma-icon.svg')}/>
      </Pressable>
      {isVisible ? null : (<DropDown />)}
          <Image source = {require('../assets/Logos/Logo_PalmaActiva.svg')} style = {{marginTop: 57, marginBottom: 84, alignSelf: 'center'}}/>

          <Pressable style = {styles.button} onPress={goCursos} >
            <Text style = {styles.textButton}> CURSOS </Text>
          </Pressable>

          <Pressable style = {styles.button} onPress={goOfertas} >
            <Text style = {styles.textButton}> OFERTES </Text>
          </Pressable>

          <Image source = {require('../assets/Logos/Logo_Ajuntament.svg')} style = {{marginTop: -3, alignSelf: 'center'}}/>
        </View>
      
      </View>

      
  );
}

// Get heigth of screen
const screenHeight = Dimensions.get('window').height;

// Style
const styles = StyleSheet.create({
  main: {
     height: screenHeight - 122,
     marginTop: 12,
     marginBottom: 80,
     marginHorizontal: 12,
  },

  idioma: {
    width: 40,
    height: 40,
    borderColor: '#E03E52',
    borderWidth: 2,
    padding: '0.1rem',
    alignSelf: 'flex-end',
  },

  button: {
    alignSelf: 'center',
    height: 98,
    width: '90%',
    backgroundColor: '#E03E52',

    // Alinea el texto en el centro del botón
    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 72,
  },

  textButton: {
    color: '#ffffff',
    fontSize: '1.5rem',
    fontWeight: '600',
  }

});

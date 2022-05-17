import React, {useState} from 'react';
import { Text, View, Image, Pressable, Dimensions, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';

import DropDown from './DropDown';

import {useRoute} from '@react-navigation/native';

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

  const [notVisible, setNotVisible] = useState(true);

  const route = useRoute();
  var routeText = route.name;

  return (
    <SafeAreaView>
      <View style = {{ backgroundColor: '#ffffff', minHeight: '92%'}}>
     
        <View style = {styles.main}>
          <Pressable style = {styles.idioma} 
          onPress={() => {
          setNotVisible(!notVisible);}}>
            <Image source = {require('../assets/Icons/idioma-icon.png')}/>
          </Pressable>
          {notVisible ? null : (<DropDown />)}
        
          <Image source = {require('../assets/Logos/Logo_PalmaActiva.png')} style = {{marginTop: 57, marginBottom: 84, alignSelf: 'center'}}/>

          <Pressable style = {styles.button} onPress={goCursos} >
            <Text style = {styles.textButton}> CURSOS </Text>
          </Pressable>

          <Pressable style = {styles.button} onPress={goOfertas} >
            <Text style = {styles.textButton}> OFERTES </Text>
          </Pressable>

          <Image source = {require('../assets/Logos/Logo_Ajuntament.png')} style = {{marginTop: -3, alignSelf: 'center'}}/>
        </View>
        
      </View>
    </SafeAreaView>
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

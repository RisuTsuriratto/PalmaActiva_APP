import * as React from 'react';
import { Text, View, Image, Button, Pressable, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// Imports from local files
import FixedMenu from './components/FixedMenu';
import DeviceInfo from './components/DeviceInfo';

// Primera Página APP
export default function HomePage() {
  return (
    <View>
      <DeviceInfo/>

      <View style = {styles.main}>
        <Pressable>
          <Image source = {require('./assets/Icons/idioma-icon.svg')} style = {styles.idioma} />
        </Pressable>

        <Image source = {require('./assets/Logos/Logo_PalmaActiva.svg')} style = {{marginTop: 57, marginBottom: 84, alignSelf: 'center'}}/>

        <Pressable style = {styles.button}
        //onPress={onPressLearnMore}
        >
          <Text style = {styles.textButton}> CURSOS </Text>
        </Pressable>

         <Pressable style = {styles.button}
        //onPress={onPressLearnMore}
        >
          <Text style = {styles.textButton}> OFERTES </Text>
        </Pressable>

        <Image source = {require('./assets/Logos/Logo_Ajuntament.svg')} style = {{marginTop: -3, alignSelf: 'center'}}/>
      </View>

      <FixedMenu/>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 12,
    marginBottom: 80,
    marginHorizontal: 12,
  },

  idioma: {
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

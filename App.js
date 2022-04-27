import * as React from 'react';
import { Text, View, Image, Button, Pressable, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// Imports from local files
import FixedMenu from './components/FixedMenu';
import DeviceInfo from './components/DeviceInfo';
import Cursos from './cursos'

// Primera Página APP
export default function HomePage() {
  return (
    <View>
      <DeviceInfo/>

      <View style = {styles.main}>
        <Cursos/>
      </View>

      <FixedMenu/>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 12,
    height: '94.5vh',
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

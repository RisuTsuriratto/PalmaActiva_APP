import * as React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';

import Home from '../components/HomePage';
import Cursos from '../components/ListPage';
import Title from '../components/HeaderTitle';


// Fixed Menu
export default function FixedMenu() {
  function goHome({ navigation }) {
    alert('Voy a Inicio');
  }

  function goCursos({ navigation }) {
    alert('Voy a Cursos');
  }

  function goOfertas({ navigation }) {
    alert('Voy a Ofertas');
  }

  function goUsuari({ navigation }) {
    alert('Voy a Usuari');
  }

  return (
    <View style = {styles.container}>
      <View style = {{flexDirection: 'row'}}>
        <Pressable style = {styles.buttonMenu} onPress={goHome}>
          <Image source = {require('../assets/Icons/inici-icon.svg')} />
          <Text style={styles.iconTitle}> Inici </Text>
        </Pressable>
        <Pressable style = {styles.buttonMenu} onPress={goCursos}>
          <Image source = {require('../assets/Icons/cursos-icon.svg')} />
          <Text style={styles.iconTitle}> Cursos </Text>
        </Pressable>
        <Pressable style = {styles.buttonMenu} onPress={goOfertas}>
          <Image source = {require('../assets/Icons/ofertes-icon.svg')} />
          <Text style={styles.iconTitle}> Ofertes </Text>
        </Pressable>
        <Pressable style = {styles.buttonMenu} onPress={goUsuari}>
          <Image source = {require('../assets/Icons/usuari-icon.svg')} />
          <Text style={styles.iconTitle}> Usuari </Text>
        </Pressable>
      </View>
    </View>
  );
}

// Style
const styles = StyleSheet.create({
  container: {
    position: 'fixed',
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: '#E03E52',
    height: 65,
  },
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

import * as React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';

export default function FixedMenu() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.buttonMenu} /*onPress = {//onPressDoX}*/>
        <Image source = {require('../assets/Icons/inici-icon.svg')} />
        <Text style={styles.iconTitle}> Inici </Text>
      </Pressable>

      <Pressable style={styles.buttonMenu} onPress = {alert("Hola")}>
        <Image source = {require('../assets/Icons/cursos-icon.svg')} />
        <Text style={styles.iconTitle}> Cursos </Text>
      </Pressable>

      <Pressable style={styles.buttonMenu} /*onPress = {//onPressDoX}*/>
        <Image source = {require('../assets/Icons/ofertes-icon.svg')} />
        <Text style={styles.iconTitle}> Ofertes </Text>
      </Pressable>

      <Pressable style={styles.buttonMenu} /*onPress = {//onPressDoX}*/>
        <Image source = {require('../assets/Icons/usuari-icon.svg')} />
        <Text style={styles.iconTitle}> Usuari </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute', 
    left: 0, 
    right: 0,
    top: 707, // Sustituto del bottom porque en web no me funciona, desaparece el menú.
    //bottom: 0,
    height: 65,
    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    
    backgroundColor: '#E03E52',
    
  },

  buttonMenu: {
    width: 60,
    height: 65,
    marginHorizontal: '0.4rem',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconTitle: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  
});

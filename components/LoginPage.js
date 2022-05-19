import React from 'react';
import { Text, View, Image, Pressable, Dimensions, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import {useRoute} from '@react-navigation/native';

// Import Localisation Stuff
import i18n from './i18n';

// Home Page
export default function HomePage({ navigation }) {
  function goCursos() {
    navigation.navigate('Cursos');
  }

  function goOfertas() {
    navigation.navigate('Ofertes');
  }

  const route = useRoute();
  var routeText = route.name;

  return (
    <SafeAreaView>
      <View style = {styles.main}>
        <Image style = {styles.logo} source = {require('../assets/Logos/Logo_PalmaActiva.png')}/>
        <View style = {styles.formulario}>
          <View>
            <Pressable>
              <Image source = {require('../assets/Icons/back-icon-red.png')} />
              <Text style = {{ color: '#E03E52', fontWeight: 600, fontSize: '1.1rem', marginLeft: '0.3rem', paddingBottom: 3}}> {i18n.t('LoginPage.Tornar')} </Text>
              <Text style = {{ color: '#E03E52', fontWeight: 600, fontSize: '1.1rem', marginLeft: '1.3rem', paddingBottom: 3}}> {i18n.t('LoginPage.Inici de sessió')} </Text>

              <View style = {{display: 'block'}}>
            <Pressable style = {[styles.input, styles.filtro, styles.notLastFiltro]}>
              <Text style = {styles.textFiltro}> {i18n.t('LoginPage.Usuari')} </Text>
            </Pressable>

            <Pressable style = {[styles.input, styles.filtro]}>
              <Text style = {styles.textFiltro}> {i18n.t('LoginPage.Clau de pas')} </Text>
            </Pressable>
          </View>

            </Pressable>
          </View>
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
    backgroundColor: '#ffffff',
    minHeight: '92%'
  },
  logo: {
    margin: 'auto',
    top: 81
  },
  formulario: {
    top: 150,
    width: 275,
    height: 413,
    margin: 'auto',
    padding: '1rem',
    borderTopColor: '#E03E52',
    borderTopWidth: 4,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  input: {
    height: 49,
    backgroundColor: '#ffffff',
    padding: 10,
    marginTop: 25,
    paddingLeft: 15,
    paddingRight: 50,
    fontSize: 18,
    outline: '1px solid rgba(162, 172, 171, 0.5)',
  },
  textFiltro: {
    color: "#A2ACAB",
    fontSize: 18,
  },
});
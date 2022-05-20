import React from 'react';
import { Text, View, Image, Pressable, Dimensions, StyleSheet, TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import {useRoute} from '@react-navigation/native';

// Import Localisation Stuff
import i18n from './i18n';

// Login Page
export default function LoginPage({ navigation }) {

  const route = useRoute();
  var routeText = route.name;

  return (
    <SafeAreaView style = {{backgroundColor: '#ffffff', height: '100%'}}>
      <View>
        <Image style = {styles.logo} source = {require('../assets/Logos/Logo_PalmaActiva.png')} />
        <View style = {styles.modal}>
          <Pressable>
            <Image source = {require('../assets/Icons/back-icon-red.png')} />
            <Text style = {[styles.formheader, { marginLeft: '2rem', marginTop: '-1.7rem' }]}> {i18n.t('LoginPage.Tornar')} </Text>
          </Pressable>
          <Text style = {[styles.formheader, { textAlign: 'right', marginRight: -2, marginTop: '-2.3rem' }]}> {i18n.t('LoginPage.Inici de sessió')} </Text>
          <View style = {styles.container}>
            <View style = {styles.sectionStyle}>
              <Image source = {require('../assets/Icons/person-icon-red.png')} style = {{margin: 10}} />
              <TextInput placeholder = {i18n.t('LoginPage.Usuari')} placeholderTextColor = "#A2ACAB" underlineColorAndroid="transparent" />
            </View>
            <View style = {styles.sectionStyle}>
              <Image source = {require('../assets/Icons/lock-icon-red.png')} style = {{margin: 10}} />
              <TextInput placeholder = {i18n.t('LoginPage.Clau de pas')} placeholderTextColor = "#A2ACAB" underlineColorAndroid="transparent" />
            </View>
            <Pressable>
              <View style = {styles.submitButton}>
                <Text style = {styles.buttonText}> {i18n.t('LoginPage.Identificarse')} </Text>
              </View>
            </Pressable>
            <Text style = {{}}>
            {i18n.t('LoginPage.TextClauLogin1')}<span style = {{color: '#E03E52', fontWeight: 600}}> {i18n.t('LoginPage.SpanClauLogin1')}</span>.
            <br/><br/>{i18n.t('LoginPage.TextLogin')}</Text>
            <Text style = {{fontWeight: 600, marginLeft: -9}}>{i18n.t('LoginPage.TextLoginReg')}</Text>
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
  logo: {
    margin: 'auto',
    top: 57,
  },
  buttonText: {
    textAlign: 'center',
    marginTop: 14,
    color: '#fff',
    fontWeight: 600,
    fontSize: 16
  },
  formheader: {
    color: '#E03E52',
    fontWeight: 600,
    fontSize: '1.1rem',
    paddingBottom: 15,
  },
  modal: {
    backgroundColor: '#ffffff',
    top: 150,
    width: 275,
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
    elevation: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    margin: 10,
  },
  submitButton: {
    height: 49,
    width: 240,
    margin: 10,
    backgroundColor: '#E03E52'
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    backgroundColor: '#fff',
    border: '1px solid rgba(162, 172, 171, 0.5)',
    height: 49,
    width: 240,
    margin: 10,
  }
});
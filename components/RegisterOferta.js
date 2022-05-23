import React from 'react';
import { Text, View, Image, Pressable, Dimensions, StyleSheet, TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import {useRoute} from '@react-navigation/native';

// Import Localisation Stuff
import i18n from './i18n';

// Register Page
export default function RegisterPage({ navigation }) {

  const route = useRoute();
  var routeText = route.name;

    return (
    <SafeAreaView style = {{backgroundColor: '#ffffff', height: '100%'}}>
      <View>
        <Image style = {styles.logo} source = {require('../assets/Logos/Logo_PalmaActiva.png')} />
        <View style = {styles.modal}>
          <Pressable>
            <Image source = {require('../assets/Icons/back-icon-red.png')} />
            <Text style = {[styles.formheader, { marginLeft: '2rem', marginTop: '-1.7rem' }]}> {i18n.t('RegisterPage.Tornar')} </Text>
          </Pressable>
          <Text style = {[styles.formheader, { textAlign: 'right', marginRight: -2, marginTop: '-2.3rem' }]}> {i18n.t('RegisterPage.Registre')} </Text>
          <View style = {styles.container}>
            <View style = {styles.sectionStyle}>
              <TextInput style={styles.input} placeholder = {i18n.t('RegisterPage.Nom')} placeholderTextColor = "#A2ACAB" underlineColorAndroid="transparent" />
            </View>
            <View style = {styles.sectionStyle}>
              <TextInput style={styles.input} placeholder = {i18n.t('RegisterPage.Llinatges')} placeholderTextColor = "#A2ACAB" underlineColorAndroid="transparent" />
            </View>
            <View style = {styles.sectionStyle}>
              <TextInput style={styles.input} placeholder = {i18n.t('RegisterPage.Document')} placeholderTextColor = "#A2ACAB" underlineColorAndroid="transparent" />
            </View>
            <View style = {styles.sectionStyle}>
              <TextInput style={styles.input} placeholder = {i18n.t('RegisterPage.Passaport')} placeholderTextColor = "#A2ACAB" underlineColorAndroid="transparent" />
            </View>
            <View style = {styles.sectionStyle}>
              <TextInput style={styles.input} placeholder = {i18n.t('RegisterPage.Telèfon')} placeholderTextColor = "#A2ACAB" underlineColorAndroid="transparent" />
            </View>
            <Pressable style = {{alignSelf: 'end', flexDirection: 'row'}}>
              <Text style = {[styles.formheader, {paddingBottom: 0}]}>{i18n.t('RegisterPage.Següent')}</Text>
              <Image style = {{marginLeft: '0.5rem',marginRight: '-0.5rem'}} source = {require('../assets/Icons/next-icon-red.png')} />
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
  logo: {
    margin: 'auto',
    top: 57,
  },
  formheader: {
    color: '#E03E52',
    fontWeight: 600,
    fontSize: '1.1rem',
    paddingBottom: 15,
  },
  modal: {
    backgroundColor: '#ffffff',
    top: 100,
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
  input: {
    backgroundColor: '#ffffff',
    fontSize: 18,
    outline: 'none',
    height: 45,
    width: 240,
  },
  container: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    margin: 10,
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
    paddingHorizontal: 10
  }
});
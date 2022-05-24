import React, {useState} from 'react';
import { Text, View, Image, Pressable, Dimensions, StyleSheet, TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { RadioButton } from 'react-native-paper';

import {useRoute} from '@react-navigation/native';

// Import Localisation Stuff
import i18n from './i18n';

// Register Page
export default function RegisterPage({ navigation }) {

  const route = useRoute();
  var routeText = route.name;

  const [checked, setChecked] = useState('first');

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
              <TextInput style={styles.input} placeholder = {i18n.t('RegisterPage.Primer cognom')} placeholderTextColor = "#A2ACAB" underlineColorAndroid="transparent" />
            </View>
            <View style = {styles.sectionStyle}>
              <TextInput style={styles.input} placeholder = {i18n.t('RegisterPage.Segon cognom')} placeholderTextColor = "#A2ACAB" underlineColorAndroid="transparent" />
            </View>
            <View style = {styles.sectionStyle}>
              <TextInput style={styles.input} placeholder = {i18n.t('RegisterPage.DocumentP')} placeholderTextColor = "#A2ACAB" underlineColorAndroid="transparent" />
            </View>
            <View style = {[styles.sectionStyle, {justifyContent: 'space-between'}]}>
              <TextInput style={[styles.input, {width: 180}]} placeholder = {i18n.t('RegisterPage.Data')} placeholderTextColor = "#A2ACAB" underlineColorAndroid="transparent" />
              <Image source = {require('../assets/Icons/calendar-icon-red.png')} />
            </View>
            <Text style={{alignSelf: 'start', marginBottom: -15, marginLeft: 10, zIndex: 10, fontSize: 18}}>{i18n.t('RegisterPage.Sexe')}:</Text>
            <View style = {styles.radioBox}>
              <View style = {styles.radioStyle}>
                <RadioButton
                  value="first"
                  color= '#E03E52'
                  status={ checked === 'first' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked('first')}
                />
                <Text>{i18n.t('RegisterPage.Home')}</Text>
              </View>
              <View style = {styles.radioStyle}>
                <RadioButton
                  value="second"
                  color= '#E03E52'
                  status={ checked === 'second' ? 'checked' : 'unchecked' }
                  onPress={() => setChecked('second')}
                />
                <Text>{i18n.t('RegisterPage.Dona')}</Text>
              </View>
            </View>
            <Pressable style = {{alignSelf: 'end', marginRight: -7}}>
              <Image source = {require('../assets/Icons/next-icon-red.png')} />
              <Text style = {[styles.formheader, {marginLeft: '-4.5rem', marginTop: '-1.7rem', paddingBottom: 0}]}>{i18n.t('RegisterPage.Següent')}</Text>
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
  },
  radioBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 49,
    width: 240,
    margin: 5,
    padding: 10
  },
  radioStyle: {
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 49,
    margin: 10,
    padding: 10
  }
});
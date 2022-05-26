import React, {useState} from 'react';
import { Text, View, Image, Pressable, Dimensions, StyleSheet, TextInput } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import BouncyCheckbox from "react-native-bouncy-checkbox";

import {useRoute} from '@react-navigation/native';

// Import Localisation Stuff
import i18n from './i18n';

// Register Page
export default function RegisterPage({ navigation }) {

  const route = useRoute();
  var routeText = route.name;

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

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
              <TextInput style={styles.input} placeholder = 'Email' placeholderTextColor = "#A2ACAB" underlineColorAndroid="transparent" />
            </View>
            <BouncyCheckbox
              size={23}
              fillColor="#E03E52"
              unfillColor="#FFFFFF"
              text={i18n.t("RegisterPage.Certifico")}
              style= {{marginVertical: 8}}
              iconStyle={{ borderColor: "#A2ACAB", borderRadius: 0, alignSelf: 'start', marginTop: 5 }}
              textStyle={{ textDecorationLine: "none", width: 200, fontSize: 15}}
              onPress={(isChecked: boolean) => {}}
            />
            <Text style = {{alignSelf: 'start', marginLeft: -6}}>Captcha: </Text>
            <View style = {{flexDirection: 'row', justifyContent: 'start', width: 250}}>
              <Image style = {{marginRight:10, marginLeft: 5}} source = {require('../assets/ejemplo-captcha.png')} />
              <Image source = {require('../assets/Icons/reload-icon-red.png')} />
            </View>
            <View style = {styles.sectionStyle}>
              <TextInput style={styles.input} placeholder = {i18n.t('RegisterPage.Escriu')} placeholderTextColor = "#A2ACAB" underlineColorAndroid="transparent" />
            </View>
            <Pressable>
              <View style = {styles.submitButton}>
                <Text style = {styles.buttonText}> {i18n.t('RegisterPage.Registrarse')} </Text>
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
  buttonText: {
    textAlign: 'center',
    marginTop: 14,
    color: '#fff',
    fontWeight: 600,
    fontSize: 16
  },
  submitButton: {
    height: 49,
    width: 240,
    margin: 10,
    backgroundColor: '#E03E52'
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
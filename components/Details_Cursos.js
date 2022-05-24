import * as React from 'react';
import { Text, View, Image, Pressable, Dimensions, StyleSheet, ScrollView, Modal, FlatList } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useRoute } from '@react-navigation/native';
import { useState } from 'react';

import Header from './HeaderMenu.js';

// Details List Item
export default function Details({ navigation }) {
  var route = useRoute();
  var routeName = route.name;

  var cardData = '25/03/22 - 25/03/2022';
  var cardState = 'Preinscripció';
  var cardHours = '2 hores';
  var cardPlaces = '31 places lliures';

  const [filterActive, setFilterActive] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);


  return (
    <ScrollView showsVerticalScrollIndicator = {false} style = {{ backgroundColor: '#ffffff' }}>
      <Header/>
      <SafeAreaView>

        <View style = {styles.cardInfo}>
            <View style = {styles.cardInfoContent}> 
              <Image source={require('../assets/Icons/calendar-icon.png')}/>
              <Text style = {styles.cardInfoTitle}> Data: </Text>
              <Text style = {styles.cardInfoText}> {cardData} </Text>
            </View>
            <View style = {styles.cardInfoContent}> 
              <Image source={require('../assets/Icons/state-icon.png')}/>
              <Text style = {styles.cardInfoTitle}> Estat: </Text>
              <Text style = {styles.cardInfoText}> {cardState} </Text>
            </View>
            <View style = {styles.cardInfoContent}> 
              <Image source={require('../assets/Icons/time-icon.png')}/>
              <Text style = {styles.cardInfoTitle}> Hores: </Text>
              <Text style = {styles.cardInfoText}> {cardHours} </Text>
            </View>
            <View style = {styles.cardInfoContent}> 
              <Image source={require('../assets/Icons/usuari-icon.png')}/>
              <Text style = {styles.cardInfoTitle}> Places: </Text>
              <Text style = {styles.cardInfoText}> {cardPlaces} </Text>
            </View>
        </View>

        <View style = {styles.main}>
          <Text style = {styles.title}>Títol del curs</Text>

          <Text style = {styles.subtitle}>Informació important</Text>
          <View style = {[styles.cardInfoContent, {marginVertical: '0.5rem'}]}> 
            <Image source={require('../assets/Icons/time-icon-dark.png')} style = {{marginRight: '1rem'}}/>
            <Text style = {styles.text}>Dia 25 de març de les 09.30h a les 11.30h</Text>
          </View>
          <View style = {[styles.cardInfoContent, {marginVertical: '0.5rem'}]}> 
            <Image source={require('../assets/Icons/place-icon-dark.png')} style = {{marginRight: '1rem'}}/>
            <Text style = {styles.text}>Carrer Socors, 22</Text>
          </View>
          <View style = {[styles.cardInfoContent, {marginVertical: '0.5rem'}]}> 
            <Image source={require('../assets/Icons/schedule-icon-dark.png')} style = {{marginRight: '1rem'}}/>
            <Text style = {styles.text}>Inscripció a partir de: 08/03/2022</Text>
          </View>

          <Text style = {styles.subtitle}>Resum</Text>
          <Text style = {styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue massa eu viverra condimentum. Maecenas nec nisi ex. Sed elementum imperdiet elementum. Aenean congue massa eu viverra condimentum. Maecenas nec nisi ex. Sed elementum imperdiet elementum. Maecenas nec nisi ex. Sed elementum imperdiet elementum.</Text>

          <Text style = {styles.subtitle}>A qui va dirigit</Text>
          <Text style = {styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
          

          <View style = {styles.divider}></View>
          
          <Pressable style = {styles.button}>
            <Text style = {styles.textButton}> Inscrirure'm </Text>
          </Pressable>
          <View style = {{height: 36}}></View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}


// Get heigth of screen
const screenHeight = Dimensions.get('window').height;

// Style
const styles = StyleSheet.create({
  main: {
     height: screenHeight - 500,
     marginTop: 12,
     marginBottom: 80,
     marginHorizontal: 12,
  },

  cardInfo: {
    backgroundColor: '#44474E',
    height: 167,
    paddingVertical: '0.3rem',
    paddingHorizontal: '1.1rem'
  },

  cardInfoContent: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginVertical: '0.2rem',
  },

  cardInfoTitle: {
    fontSize: '1.13rem',
    fontWeight: 600,
    color: '#ffffff',
    marginLeft: '0.5rem',
    width: 70
  },

  cardInfoText: {
    fontSize: '1.13rem',
    color: '#ffffff',
    marginRight: 0
  },

  title: {
    fontSize: '1.25rem',
    fontWeight: 600,
    color: '#000000',
  },

  subtitle: {
    fontSize: '1.25rem',
    color: '#E03E52',
    marginTop: '0.8rem',
    marginBottom: '0.4rem'
  },

  text: {
    fontSize: '1.13rem',
    color: '#333333',
  },

  divider : {
    height: 1,
    backgroundColor: '#cfcfcf',
    marginVertical: '2rem',
  },

  button: {
    width: '90%',
    height: 65,
    backgroundColor: '#E03E52',
    marginHorizontal: 'auto',
    alignItems: 'center',
    justifyContent: 'center'
  },

  textButton: {
    color: '#ffffff',
    fontSize: '1.25rem',
    fontWeight: 600,
  },

});

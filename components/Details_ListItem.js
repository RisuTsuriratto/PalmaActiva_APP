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

  var cardSector = 'Privat';
  var cardContract = 'Temporal';

  const [filterActive, setFilterActive] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  function goCursos() {
    navigation.navigate('Cursos');
  }

  function cardInfo() {
    if (route.name == "Cursos") {
      return cardHours;
    } else {
      return cardSector;
    }
  }

  return (
    <ScrollView showsVerticalScrollIndicator = {false}>
      <Header/>
      <SafeAreaView style = {{ backgroundColor: '#ffffff' }}>

       <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.modalBG}>
              <View style={styles.modalView}>

                <View style = {{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                  <Text style={[styles.modalHeading, {paddingTop: '8%'}]}> Informació </Text>
                  <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Image source = {require('../assets/Icons/close-icon.png')} />
                  </Pressable>
                </View>

                <ScrollView style = {{marginBottom: '10%', marginRight: -5}}>
                  <FlatList 
                    data = { {key: 'Hello'} }

                    showsHorizontalScrollIndicator={false}

                    renderItem={({item}) => 
                      <Text style = {{marginBottom: 16, flexDirection: 'row', alignItems: 'center'}}>
                        <Image source = { filterActive ? require('../assets/Icons/filter-circle-active.png') : require('../assets/Icons/filter-circle.png')}/>
                        <Text style = {{fontSize: 16, color: '#333333', marginLeft: 10}}>{item.title}</Text>
                      </Text>  
                    }
                  />
                </ScrollView>
              </View>
            </View>
          </Modal>

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
          <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style = {styles.title}>Hola soy el título del detalle </Text>
            <Pressable onPress = {() => setModalVisible(true) }>
              <Image source = {require('../assets/Icons/info-icon.png')}/>
            </Pressable>
          </View>

          <Text style = {styles.subtitle}>Soy el subtítulo </Text>
          <Text style = {styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet est nibh. Proin luctus at tellus quis commodo. Vestibulum interdum erat ipsum, sit amet tempor sem imperdiet placerat. Maecenas sed ipsum egestas, molestie erat ac, semper dui. Proin posuere varius tellus, vitae tincidunt eros eleifend sed. Suspendisse vel elementum nisi. Nullam vitae sapien sit amet urna gravida luctus sit amet nec purus. Maecenas quis sem laoreet, molestie tortor sed, elementum nulla. Etiam cursus elit non luctus fringilla. Donec quis feugiat ligula. In imperdiet quam nec purus vestibulum, tristique tincidunt nisi sollicitudin. Mauris eros nibh, maximus ac lobortis vestibulum, porta. </Text>
          

          <View style = {styles.divider}></View>
          
          <Pressable style = {styles.button}>
            <Text style = {styles.textButton}> Inscrirure m </Text>
          </Pressable>
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
     height: screenHeight - 122,
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
    marginTop: '2rem',
    marginBottom: '1.5rem'
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

  modalBG: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },

  modalView: {
    minHeight: '50%',
    maxHeight: '90%',
    margin: 20,
    paddingLeft: 25,
    paddingRight: 15,
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  
  modalHeading: {
    marginBottom: 18,
    color: '#E03E52',
    fontSize: 26,
    fontWeight: 600
  },
});

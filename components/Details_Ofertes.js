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

  var cardData = '25/03/22';
  var cardState = 'Oberta';
  var cardSector = 'Privat';
  var cardContract = 'Temporal';

  const [filterActive, setFilterActive] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView showsVerticalScrollIndicator = {false} style = {{ backgroundColor: '#ffffff' }}>
      <Header/>
      <SafeAreaView>

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

                <ScrollView style = {{marginBottom: '10%'}} showsVerticalScrollIndicator = {false}>
                  <Text style = {styles.text}>Si en el termini de tres dies no ens posem en contacte amb tu, és perquè les dades de la teva fitxa no corresponen al perfil demandat per l'empresa col·laboradora. </Text>

                  <Text style = {styles.modalSubtitle}>RECORDA!!</Text>
                  <Text style = {styles.text}>Si ens posem en contacte amb tu i estàs interessat/da en l'oferta, hauràs d'enviar un CV actualitzat al correu proporcionat, si no estàs interessat/da, hauràs d'indicar el motiu de no interès perquè et puguem derivar a altres ofertes més adaptades als teus requisits. En tot cas, no dubtis en posar-te en contacte amb nosaltres per a qualsevol aclariment.</Text>

                  <Text style = {styles.modalSubtitle}>MOLT IMPORTANT!!</Text>
                  <Text style = {styles.text}>Per a poder accedir a les OFERTES DE FEINA has d'estar prèviament inscrit/a en l'Agència de Col·locació. Exceptuant ofertes del sector públic. Si no estàs inscrit/a i t'interessa inscriure't: </Text>

                  <Pressable style = {styles.modalButton}>
                    <Text style = {styles.modalTextButton}>Inscriu-te</Text>
                  </Pressable>

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
              <Image source={require('../assets/Icons/sector-icon.png')}/>
              <Text style = {styles.cardInfoTitle}> Sector: </Text>
              <Text style = {styles.cardInfoText}> {cardSector} </Text>
            </View>
            <View style = {styles.cardInfoContent}> 
              <Image source={require('../assets/Icons/contract-icon.png')}/>
              <Text style = {styles.cardInfoTitle}> Contracte: </Text>
              <Text style = {styles.cardInfoText}> {cardContract} </Text>
            </View>
        </View>

        <View style = {styles.main}>
          <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style = {styles.title}>Títol de l'oferta </Text>
            <Pressable onPress = {() => setModalVisible(true) }>
              <Image source = {require('../assets/Icons/info-icon.png')}/>
            </Pressable>
          </View>

          <Text style = {styles.subtitle}>Activitat econòmica</Text>
          <Text style = {styles.text}>Activitats informàtiques, NT i telecomunicació</Text>

          <Text style = {styles.subtitle}>Perfil</Text>
          <Text style = {styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue massa eu viverra condimentum. Maecenas nec nisi ex. Sed elementum imperdiet elementum. Aenean congue massa eu viverra condimentum. Maecenas nec nisi ex. Sed elementum imperdiet elementum.</Text>

          <Text style = {styles.subtitle}>Dedicació</Text>
          <Text style = {styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

          <Text style = {styles.subtitle}>Altres dades</Text>
          <Text style = {styles.text}><Text style = {{fontWeight: 'bold'}}>Lloc de feina:</Text> Palma</Text>
          <Text style = {styles.text}><Text style = {{fontWeight: 'bold'}}>Sou:</Text> Segons conveni col·lectiu</Text>
          <Text style = {styles.text}><Text style = {{fontWeight: 'bold'}}>Codi gen:</Text> 1086001</Text>
          <Text style = {styles.text}><Text style = {{fontWeight: 'bold'}}>Codi empresa:</Text> 6203</Text>
          <Text style = {styles.text}><Text style = {{fontWeight: 'bold'}}>Codi oferta:</Text> 3</Text>
          
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
    width: 100
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

  modalBG: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },

  modalView: {
    minHeight: '50%',
    maxHeight: '90%',
    margin: 20,
    paddingHorizontal: 25,
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

  modalSubtitle: {
    fontSize: '1.125rem',
    color: '#E03E52',
    marginTop: '0.8rem',
    marginBottom: '0.4rem',
    fontWeight: 600
  },

  modalButton: {
    height: 45,
    backgroundColor: '#E03E52',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.3rem',
    marginVertical: '1rem'
  },

  modalTextButton: {
    color: '#ffffff',
    fontSize: '1.125rem',
    fontWeight: 600,
  },
});

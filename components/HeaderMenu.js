import * as React from 'react';
import { useState } from 'react';

import { View, Text, TextInput, StyleSheet, Pressable, Image, Dimensions, Modal, FlatList, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import HeaderTitle from './HeaderTitle';

import { useRoute } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function HeaderMenu({navigation}) {
  // Variables
  var route = useRoute();
  var routeName = route.name;

  var whatToSearch = 'Cerca ';
  whatToSearch += routeName.toLowerCase();

  var filtro1;
  var filtro2;

  // Contenido de los filtros
  var filterFamilia = [
    {key: 0, title: "Comerç"},
    {key: 1, title: "Competències transversals"},
    {key: 2, title: "Creació i gestió d'empreses"},
    {key: 3, title: "Hoteleria i turisme"},
    {key: 4, title: "Idiomes"},
    {key: 5, title: "Nàutica"},
    {key: 6, title: "Noves tecnologies avançat"},
    {key: 7, title: "Noves tecnologies bàsic"}
  ];

  var filterTipus = [
    {key: 0, title: "Càpsula (Accions -10h)"},
    {key: 1, title: "Curs online"},
    {key: 2, title: "Curs presencial (Accions +10h)"},
    {key: 3, title: "Jornada/Event/Conferència"},
    {key: 4, title: "Online (en diferit)"},
    {key: 5, title: "Online (en directe per streaming)"},
    {key: 6, title: "Tallers Assesorament Laboral"},
  ];

   var filterCategoria = [
    {key: 0, title: "Activitat d'imatge personal"},
    {key: 1, title: "Activitats immobiliàries"},
    {key: 2, title: "Activitats informàtiques, NT i telecomunicació"},
    {key: 3, title: "Activitats recreatives, esportives i espectacles"},
    {key: 4, title: "Activitats socials, socioculturals i a la comunitat"},
    {key: 5, title: "Administració d'empreses / consultories / gestories i despatxos"},
    {key: 6, title: "Agricultura, ramaderia, pesca i jardineria"},
    {key: 7, title: "Arts i oficis"},
    {key: 8, title: "Comerç"},
    {key: 9, title: "Comunicació i audiovisuals"},
    {key: 10, title: "Construcció i serveis tècnics"},
    {key: 11, title: "Educació i humanitats"},
    {key: 12, title: "Hoteleria, restauració i turisme"},
    {key: 13, title: "Industria d'alimentació i productes afins"},
    {key: 14, title: "Industria de la fusta / metall / paper / fabvricació de mobles"},
    {key: 15, title: "Industria química i farmacèutica"},
    {key: 16, title: "Investigació i desenvolupament"},
    {key: 17, title: "Nàutica"},
    {key: 18, title: "Publicitat y márqueting"},
    {key: 19, title: "Sanitat i salut"},
    {key: 20, title: "Serveis de recursos humans"},
    {key: 21, title: "Serveis domèstics id e neteja"},
    {key: 22, title: "Transport (terrestre i aeri)"},
  ];

  var filterEspecialitat = [
    // 0 - Imatge Personal - No
    // 1 - Immobiliàries
    {key: 0, title: "Guarda - mentenidor/a de finca rústica"},
    {key: 1, title: "Personal administratiu coordinadoó immobiliària"},
    // 2 - Informàtiques
    {key: 2, title: "Developer Frontend"},
    {key: 3, title: "Informàtic/a"},
    {key: 4, title: "Tècnic/a informàtic/a"},
    {key: 5, title: "Ajudant Tècnic/a Sistemes Informàtics"},
    {key: 6, title: "Community manager"},
    {key: 7, title: "Tècnic/a màrqueting online"},
    // 3 - Recreatives, esportives
    {key: 8, title: "Monitor/a d'anglés"},
    {key: 9, title: "Monitor/a de temps lliure"},
    {key: 10, title: "Tècnic/a superior d'activitats físiques i animació esportiva"},
    {key: 11, title: "Tècnic/a Pilates i Intructor/a Fitness"},
    {key: 12, title: "Director/a temps lliure"},
    // 4  Socials i socioculturals
    {key: 13, title: "Tècnic/a Intermediació Laboral"},
    {key: 14, title: "Treballador/a social"},
    // 5 - Administració d'empreses - No
    // 6 - Agricultura, Ramaderia i pesca
    {key: 15, title: "Netejador/a d'exteriors"},
    {key: 16, title: "Supervisor/a de jardineria"},
    {key: 17, title: "Peó jardineria - jardiner/a"},
    // 7 - Arts i oficis
    {key: 18, title: "Costurer/a"},
    // 8 - Comerç
    {key: 19, title: "Ajudant dependent/a"},
    {key: 20, title: "Ajudant taller d'emmarcació"},
    {key: 21, title: "Comercial d'energia solar"},
    {key: 22, title: "Dependent/a"},
    {key: 24, title: "Delegat/ada comercial"},
    {key: 25, title: "Dependent/a mobles"},
    // 9 - Comunicació i audiovisuals
    {key: 26, title: "Expert/a Servei Atenció al client Anglés i Portugués"},
    // 10 - Cosntrucció
    {key: 27, title: "Cap de producció d'obra"},
    {key: 28, title: "Oficial 1a de contrucció"},
    {key: 29, title: "Oficial 3a instal·lació de portes automàtiques"},
    {key: 30, title: "Operari/ària electricista"},
    {key: 31, title: "Ajudant muntador/a tendals i pèrgoles"},
    {key: 32, title: "Enginyer/a industrial"},
    {key: 33, title: "Enginyer/a tècnic/a industrial"},
    {key: 34, title: "Oficial instal·lador/a tendals i pèrgoles"},
    {key: 35, title: "Operari/a recollida mostres"},
    {key: 36, title: "Picapedrer/a"},
    {key: 37, title: "Tècnic/a Obra"},
    // 11 - Educació i humanitats
    {key: 38, title: "Tècnic/a educació ambiental"},
    // 12 - Hoteleria, restauració i turisme
    {key: 39, title: "Agent de reserves"},
    {key: 40, title: "Ajudant de cambrer/a"},
    {key: 41, title: "Ajudant de cuina, sushiman i pizzer/a"},
    {key: 42, title: "Bartender"},
    {key: 43, title: "Cambrer/a"},
    {key: 44, title: "Cambrer/a de pisos"},
    {key: 45, title: "Cambrer/a de sala i ajudant de cambrer/a"},
    {key: 46, title: "Cuiner/a"},
    {key: 47, title: "Monitor/a de temps lliure / socorrista"},
    {key: 48, title: "Recepcionista alberg juvenil"},
    {key: 49, title: "Recepcionista hotel"},
    {key: 50, title: "Segon maitre"},
    {key: 51, title: "Xef o cap de cuina"},
    {key: 52, title: "Ajudant de cuina"}, // Repetido en el 41 ????
    {key: 53, title: "Animador/a hotel"}, 
    {key: 54, title: "Booking agent"}, // Repetido en el 39 ????
    {key: 55, title: "Bugader/a"},
    {key: 56, title: "Cambrer/a de barra hotel"},
    {key: 57, title: "Cambrer/a menjador hotel"},
    {key: 58, title: "Cambrer/a restaurant"},
    {key: 59, title: "Cambrer/a Room Service horari de nit"},
    {key: 60, title: "Cambrer/a restaurant"},
    {key: 61, title: "Cuiner/a hotel"},
    {key: 62, title: "Faixí (Fajín)"},
    {key: 63, title: "Rentaplats"},
    // 13 - Industria d'alimentació - No
    // 14 - Industria de fusta, etc.
    {key: 64, title: "Oficial 2n ferrer"},
    {key: 65, title: "Ferrer/a - Forjador/a"},
    {key: 66, title: "Fuster/a"},

  /*
    Pendiente
  */

  ];

  // Estados
  const [searchText, setText] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filterActive, setFilterActive] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [filterPressed, setFilterPressed] = useState(0);


  // Funciones para los botones
  function search() {
    if (searchText != "" && searchText != " ") {
      console.log({searchText});
      TextInput.setText = setText("");
    }
  }

  function goHome( ) {
    console.log("Voy a Inici");
  }

   function logIn() {
    console.log("Log In");
  }

  // #### Utilidades y funciones para los filtros ####
  // Desplegar y ocultar lso filtros mediante el botón de "Filter"
  function openFilter() {
    setShowFilters(!showFilters);
  }

  // Filter placeholder
  if (route.name == "Cursos") {
    filtro1 = 'Família';
    filtro2 = 'Tipus de curs';
  } else {
    filtro1 = 'Categoria';
    filtro2 = 'Especialitat';
  }


  function filterNameToRender() {
    console.log(filterPressed);
    if (modalVisible == true) {
     if (filterPressed == 0) {
          console.log(filtro1);
          return filtro1;
        } else {
          console.log(filtro2);
          return filtro2;
        }
    }
  }

  // Qué lista enseñar al pulsar sobre un filtro
  function filterShowList() {
    console.log(filterPressed);
    if (modalVisible == true) {
     if (filterPressed == 0 && route.name == "Cursos") {
        return filterFamilia;
      } else if (filterPressed == 1 && route.name == "Cursos") {
        return filterTipus;
      } else if (filterPressed == 0 && route.name != "Cursos") {
        return filterCategoria;
      } else if (filterPressed == 1 && route.name != "Cursos") {
        return filterEspecialitat;
      }
    }
  }


  // Header
    return (
      <SafeAreaView>
        <View style = {styles.container}>

          <View style = {styles.flex}> 
            <Pressable onPress={ goHome }>
              <Image source = {require('../assets/Logos/Isotipo.png')} />
            </Pressable>
            
            <Pressable onPress={ logIn } style = {{borderColor: '#fff', borderWidth: 2,  width: '13rem', height: 49}}>
              <Text style = {{color: '#fff', fontSize: 15, fontWeight: 'bold', alignSelf: 'center', justifyContent: 'center', paddingTop: '0.7rem'}}> 
                Inici de sessió 
              </Text>
            </Pressable>
          </View>

          <View style= {{position: 'relative', marginVertical: 12}}>
            <TextInput
              style = { styles.input }
              placeholder = { whatToSearch }
              placeholderTextColor = "#A2ACAB"
              maxLength = { 25 }
              onChangeText = { searchText => setText(searchText) }
              onBlur = { search }
              value = { searchText }
            />

            <Pressable onPress = { search } style= {{ position: 'absolute', top: 7, left: 5}}>
              <Image source = {require('../assets/Icons/search-icon.png')}/>
            </Pressable>

            <Pressable onPress = { openFilter } style = {{backgroundColor: '#E03E52', borderColor: '#ffffff', borderWidth: 2,  width: '94px', position: 'absolute', right: 0, top: 0, bottom: 0 }}>
              <Text style = {{color: '#fff', fontSize: 15, fontWeight: 'bold', alignSelf: 'center', paddingTop: 11}}> Filtres </Text>
            </Pressable>
          </View>




          <View style = {showFilters ? {display: 'block', marginBottom: 10} : {display: 'none'}}>
            <Pressable onPressIn = {() => setFilterPressed(0)} onPress = {() => setModalVisible(true) } style = {[styles.input, styles.filtro, styles.notLastFiltro]}>
              <Text style = {styles.textFiltro}> {filtro1} </Text>
              <Image source = {require('../assets/Icons/filter-next-icon.png')} />
            </Pressable>

            <Pressable onPressIn = {() => setFilterPressed(1)} onPress = {() => setModalVisible(true) } style = {[styles.input, styles.filtro]}>
              <Text style = {styles.textFiltro}> {filtro2} </Text>
              <Image source = {require('../assets/Icons/filter-next-icon.png')} />
            </Pressable>
          </View>








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
                  <Text style={[styles.modalHeading, {paddingTop: '8%'}]}>{filterNameToRender()}</Text>
                  <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Image source = {require('../assets/Icons/close-icon.png')} />
                  </Pressable>
                </View>

                <ScrollView style = {{marginBottom: '10%', marginRight: -5}}>
                  <FlatList 
                    data = { filterShowList() }

                    showsHorizontalScrollIndicator={false}

                    renderItem={({item}) => 
                      <Pressable style = {{marginBottom: 16, flexDirection: 'row', alignItems: 'center'}} onPress={() => setFilterActive(!filterActive)}>
                        <Image source = { filterActive ? require('../assets/Icons/filter-circle-active.png') : require('../assets/Icons/filter-circle.png')}/>
                        <Text style = {{fontSize: 16, color: '#333333', marginLeft: 10}}>{item.title}</Text>
                      </Pressable>  
                    }
                  />
                </ScrollView>
              </View>
            </View>
          </Modal>








          <View style = {styles.flex}>
            <Pressable style = {{flexDirection: 'row', alignItems: 'center', marginBottom: '0.5rem'}} onPress = { goHome }>
              <Image source = {require('../assets/Icons/back-icon.png')} />
              <Text style = {{ color: '#ffffff', fontWeight: 600, fontSize: '1.1rem', marginLeft: '0.3rem', paddingBottom: 3}}> Tornar </Text>
            </Pressable>
            
            <HeaderTitle title = {routeName} />
          </View>
        </View>
      </SafeAreaView>
    );
} 

// Get heigth of screen
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E03E52',
    paddingHorizontal: 12,
    paddingTop: 15,
  },

  flex: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  input: {
    height: 49,
    backgroundColor: '#ffffff',
    padding: 10,
    paddingLeft: 45,
    paddingRight: 100,
    fontSize: 18,
    outline: 'none',
  },

  filtro: {
    padding: 0,
    paddingLeft: 20,
    paddingRight: 0,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center'
  },

  notLastFiltro: {
    marginBottom: '0.8rem',
  },

  textFiltro: {
    color: "#A2ACAB",
    fontSize: 18,
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

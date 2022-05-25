import * as React from 'react';
import { useState } from 'react';

import { View, Text, TextInput, StyleSheet, Pressable, Image, Dimensions, Modal, FlatList, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { RadioButton } from 'react-native-paper';

import HeaderTitle from './HeaderTitle';

import { useRoute } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import Localisation Stuff
import i18n from './i18n';

const Stack = createNativeStackNavigator();

export default function HeaderMenu({navigation}) {
  // Variables
  var route = useRoute();
  var routeName = route.name;

  if(route.name == 'Ofertes'){
    routeName = i18n.t('HeaderMenu.Ofertes');
  }else{
    routeName = i18n.t('HeaderMenu.Cursos');
  }
  var whatToSearch = i18n.t('HeaderMenu.Cerca') + routeName.toLowerCase();

  var filtro1;
  var filtro2;

  // Contenido de los filtros
  var filterFamilia = [
    {key: 0, title: "Comerç", status: "unchecked"},
    {key: 1, title: "Competències transversals", status: "unchecked"},
    {key: 2, title: "Creació i gestió d'empreses", status: "unchecked"},
    {key: 3, title: "Hoteleria i turisme", status: "unchecked"},
    {key: 4, title: "Idiomes", status: "unchecked"},
    {key: 5, title: "Nàutica", status: "unchecked"},
    {key: 6, title: "Noves tecnologies avançat", status: "unchecked"},
    {key: 7, title: "Noves tecnologies bàsic", status: "unchecked"}
  ];

  var filterTipus = [
    {key: 0, title: "Càpsula (Accions -10h)", status: "unchecked"},
    {key: 1, title: "Curs online", status: "unchecked"},
    {key: 2, title: "Curs presencial (Accions +10h)", status: "unchecked"},
    {key: 3, title: "Jornada/Event/Conferència", status: "unchecked"},
    {key: 4, title: "Online (en diferit)", status: "unchecked"},
    {key: 5, title: "Online (en directe per streaming)", status: "unchecked"},
    {key: 6, title: "Tallers Assesorament Laboral", status: "unchecked"},
  ];

   var filterCategoria = [
    {key: 0, title: "Activitat d'imatge personal", status: "unchecked"},
    {key: 1, title: "Activitats immobiliàries", status: "unchecked"},
    {key: 2, title: "Activitats informàtiques, NT i telecomunicació", status: "unchecked"},
    {key: 3, title: "Activitats recreatives, esportives i espectacles", status: "unchecked"},
    {key: 4, title: "Activitats socials, socioculturals i a la comunitat", status: "unchecked"},
    {key: 5, title: "Administració d'empreses / consultories / gestories i despatxos", status: "unchecked"},
    {key: 6, title: "Agricultura, ramaderia, pesca i jardineria", status: "unchecked"},
    {key: 7, title: "Arts i oficis", status: "unchecked"},
    {key: 8, title: "Comerç", status: "unchecked"},
    {key: 9, title: "Comunicació i audiovisuals", status: "unchecked"},
    {key: 10, title: "Construcció i serveis tècnics", status: "unchecked"},
    {key: 11, title: "Educació i humanitats", status: "unchecked"},
    {key: 12, title: "Hoteleria, restauració i turisme", status: "unchecked"},
    {key: 13, title: "Industria d'alimentació i productes afins", status: "unchecked"},
    {key: 14, title: "Industria de la fusta / metall / paper / fabricació de mobles", status: "unchecked"},
    {key: 15, title: "Industria química i farmacèutica", status: "unchecked"},
    {key: 16, title: "Investigació i desenvolupament", status: "unchecked"},
    {key: 17, title: "Nàutica", status: "unchecked"},
    {key: 18, title: "Publicitat y márqueting", status: "unchecked"},
    {key: 19, title: "Sanitat i salut", status: "unchecked"},
    {key: 20, title: "Serveis de recursos humans", status: "unchecked"},
    {key: 21, title: "Serveis domèstics id e neteja", status: "unchecked"},
    {key: 22, title: "Transport (terrestre i aeri)", status: "unchecked"},
  ];

  var filterEspecialitat = [
    // 0 - Imatge Personal - No
    // 1 - Immobiliàries
    {key: 0, title: "Guarda - mentenidor/a de finca rústica", status: "unchecked"},
    {key: 1, title: "Personal administratiu coordinadoó immobiliària", status: "unchecked"},
    // 2 - Informàtiques
    {key: 2, title: "Developer Frontend", status: "unchecked"},
    {key: 3, title: "Informàtic/a", status: "unchecked"},
    {key: 4, title: "Tècnic/a informàtic/a", status: "unchecked"},
    {key: 5, title: "Ajudant Tècnic/a Sistemes Informàtics", status: "unchecked"},
    {key: 6, title: "Community manager", status: "unchecked"},
    {key: 7, title: "Tècnic/a màrqueting online", status: "unchecked"},
    // 3 - Recreatives, esportives
    {key: 8, title: "Monitor/a d'anglés", status: "unchecked"},
    {key: 9, title: "Monitor/a de temps lliure", status: "unchecked"},
    {key: 10, title: "Tècnic/a superior d'activitats físiques i animació esportiva", status: "unchecked"},
    {key: 11, title: "Tècnic/a Pilates i Intructor/a Fitness", status: "unchecked"},
    {key: 12, title: "Director/a temps lliure", status: "unchecked"},
    // 4  Socials i socioculturals
    {key: 13, title: "Tècnic/a Intermediació Laboral", status: "unchecked"},
    {key: 14, title: "Treballador/a social", status: "unchecked"},
    // 5 - Administració d'empreses - No
    // 6 - Agricultura, Ramaderia i pesca
    {key: 15, title: "Netejador/a d'exteriors", status: "unchecked"},
    {key: 16, title: "Supervisor/a de jardineria", status: "unchecked"},
    {key: 17, title: "Peó jardineria - jardiner/a", status: "unchecked"},
    // 7 - Arts i oficis
    {key: 18, title: "Costurer/a", status: "unchecked"},
    // 8 - Comerç
    {key: 19, title: "Ajudant dependent/a", status: "unchecked"},
    {key: 20, title: "Ajudant taller d'emmarcació", status: "unchecked"},
    {key: 21, title: "Comercial d'energia solar", status: "unchecked"},
    {key: 22, title: "Dependent/a", status: "unchecked"},
    {key: 24, title: "Delegat/ada comercial", status: "unchecked"},
    {key: 25, title: "Dependent/a mobles", status: "unchecked"},
    // 9 - Comunicació i audiovisuals
    {key: 26, title: "Expert/a Servei Atenció al client Anglés i Portugués", status: "unchecked"},
    // 10 - Cosntrucció
    {key: 27, title: "Cap de producció d'obra", status: "unchecked"},
    {key: 28, title: "Oficial 1a de contrucció", status: "unchecked"},
    {key: 29, title: "Oficial 3a instal·lació de portes automàtiques", status: "unchecked"},
    {key: 30, title: "Operari/ària electricista", status: "unchecked"},
    {key: 31, title: "Ajudant muntador/a tendals i pèrgoles", status: "unchecked"},
    {key: 32, title: "Enginyer/a industrial", status: "unchecked"},
    {key: 33, title: "Enginyer/a tècnic/a industrial", status: "unchecked"},
    {key: 34, title: "Oficial instal·lador/a tendals i pèrgoles", status: "unchecked"},
    {key: 35, title: "Operari/a recollida mostres", status: "unchecked"},
    {key: 36, title: "Picapedrer/a", status: "unchecked"},
    {key: 37, title: "Tècnic/a Obra", status: "unchecked"},
    // 11 - Educació i humanitats
    {key: 38, title: "Tècnic/a educació ambiental", status: "unchecked"},
    // 12 - Hoteleria, restauració i turisme
    {key: 39, title: "Agent de reserves", status: "unchecked"},
    {key: 40, title: "Ajudant de cambrer/a", status: "unchecked"},
    {key: 41, title: "Ajudant de cuina, sushiman i pizzer/a", status: "unchecked"},
    {key: 42, title: "Bartender", status: "unchecked"},
    {key: 43, title: "Cambrer/a", status: "unchecked"},
    {key: 44, title: "Cambrer/a de pisos", status: "unchecked"},
    {key: 45, title: "Cambrer/a de sala i ajudant de cambrer/a", status: "unchecked"},
    {key: 46, title: "Cuiner/a", status: "unchecked"},
    {key: 47, title: "Monitor/a de temps lliure / socorrista", status: "unchecked"},
    {key: 48, title: "Recepcionista alberg juvenil", status: "unchecked"},
    {key: 49, title: "Recepcionista hotel", status: "unchecked"},
    {key: 50, title: "Segon maitre", status: "unchecked"},
    {key: 51, title: "Xef o cap de cuina", status: "unchecked"},
    {key: 52, title: "Ajudant de cuina", status: "unchecked"}, // Repetido en el 41 ????
    {key: 53, title: "Animador/a hotel", status: "unchecked"},
    {key: 54, title: "Booking agent", status: "unchecked"}, // Repetido en el 39 ????
    {key: 55, title: "Bugader/a", status: "unchecked"},
    {key: 56, title: "Cambrer/a de barra hotel", status: "unchecked"},
    {key: 57, title: "Cambrer/a menjador hotel", status: "unchecked"},
    {key: 58, title: "Cambrer/a restaurant", status: "unchecked"},
    {key: 59, title: "Cambrer/a Room Service horari de nit", status: "unchecked"},
    {key: 60, title: "Cambrer/a restaurant", status: "unchecked"},
    {key: 61, title: "Cuiner/a hotel", status: "unchecked"},
    {key: 62, title: "Faixí (Fajín)", status: "unchecked"},
    {key: 63, title: "Rentaplats", status: "unchecked"},
    // 13 - Industria d'alimentació - No
    // 14 - Industria de fusta, etc.
    {key: 64, title: "Oficial 2n ferrer", status: "unchecked"},
    {key: 65, title: "Ferrer/a - Forjador/a", status: "unchecked"},
    {key: 66, title: "Fuster/a", status: "unchecked"},

  /*
    Pendiente
  */

  ];

  // Estados
  const [searchText, setText] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [filterPressed, setFilterPressed] = useState(0);
  const [checked, setChecked] = useState('1');


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
    filtro1 = i18n.t('HeaderMenu.Família');
    filtro2 = i18n.t('HeaderMenu.Tipus de curs');
  } else {
    filtro1 = i18n.t('HeaderMenu.Categoria');
    filtro2 = i18n.t('HeaderMenu.Especialitat');
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
                {i18n.t('HeaderMenu.Inici de sessió')} 
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
              <Text style = {{color: '#fff', fontSize: 15, fontWeight: 'bold', alignSelf: 'center', paddingTop: 11}}> {i18n.t('HeaderMenu.Filtres')} </Text>
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
                      <Pressable style = {{marginBottom: 16, flexDirection: 'row', alignItems: 'center'}} onPress={() => setChecked(!checked)}>
                        <RadioButton
                          value= {item.title}
                          color= '#E03E52'
                          status={ checked === item.key ? 'checked' : 'unchecked' }
                          onPress={() => setChecked(item.key)}
                        />
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
              <Text style = {{ color: '#ffffff', fontWeight: 600, fontSize: '1.1rem', marginLeft: '0.3rem', paddingBottom: 3}}> {i18n.t('HeaderMenu.Tornar')} </Text>
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
  }
});

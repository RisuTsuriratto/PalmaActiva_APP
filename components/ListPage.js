import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image, Pressable, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';

import Header from './HeaderMenu';

export default function ListPage({ navigation }) {
  // Variables
  var route = useRoute();
  var routeName = route.name;
  var pageTitle;
  var listContent = [];
  var goTo;
  
  // Button 1 - Obertes
  const [isActive1, setActive1] = useState(true);
  const [getColor1, setColor1] = useState('#ffffff');
  // Button 2 - En tràmit
  const [isActive2, setActive2] = useState(false);
  const [getColor2, setColor2] = useState('#E03E52');
  // Button 3 - Tancades
  const [isActive3, setActive3] = useState(false);
  const [getColor3, setColor3] = useState('#E03E52');

  

  // Get heigth of screen
  const screenHeight = Dimensions.get('window').height;

  // Title of the page
  if (routeName == "Cursos") {
    pageTitle = "Cursos de formació";
    goTo = "DetailCursos";
  } else {
    pageTitle = "Ofertes d'ocupació";
    goTo = "DetailOfertes";
  }

  // Content of list Items
  for (let i = 0; i < 26; i++) {
    listContent[i] = {
      title: routeName + " " + (i+1),
      key: i
    };
  }

  function goDetails() {
    if (routeName == "Cursos") {
      navigation.navigate("Detall del curs");
    } else {
      navigation.navigate("Detall de l'oferta");
    }
  }

  function cambiarEstado1() {
    setActive1(!isActive1);
    setActive2(false);
    setActive3(false);
    setColor2('#E03E52');
    setColor3('#E03E52');
    if (getColor1 == "#ffffff") {
      setColor1('#E03E52');
    } else {
      setColor1('#ffffff');
    }
  }

  function cambiarEstado2() {
    setActive2(!isActive2);
    setActive1(false);
    setActive3(false);
    setColor1('#E03E52');
    setColor3('#E03E52');
    if (getColor2 == "#ffffff") {
      setColor2('#E03E52');
    } else {
      setColor2('#ffffff');
    }
  }

  function cambiarEstado3() {
    setActive3(!isActive3);
    setActive1(false);
    setActive2(false);
    setColor1('#E03E52');
    setColor2('#E03E52');
    if (getColor3 == "#ffffff") {
      setColor3('#E03E52');
    } else {
      setColor3('#ffffff');
    }
  }


  function isOfertes() {
    if (routeName == "Ofertes") {
       return (
        <View style = {styles.buttonContainer}>
          <Pressable onPress = {cambiarEstado1}  style = {isActive1 ? styles.filterButtonActive : styles.filterButton}>
            <Text style = {{color: getColor1, fontSize: 15, fontWeight: 'bold', alignSelf: 'center', paddingTop: 12}}> Obertes </Text>
          </Pressable>

          <Pressable onPress = {cambiarEstado2}  style = {isActive2 ? styles.filterButtonActive : styles.filterButton}>
            <Text style = {{color: getColor2, fontSize: 15, fontWeight: 'bold', alignSelf: 'center', paddingTop: 12}}> En Tràmit </Text>
          </Pressable>

          <Pressable onPress = {cambiarEstado3}  style = {isActive3 ? styles.filterButtonActive : styles.filterButton}>
            <Text style = {{color: getColor3, fontSize: 15, fontWeight: 'bold', alignSelf: 'center', paddingTop: 12}}> Tancades </Text>
          </Pressable>
        </View>
       );
    } else {
       return null;
    }
    
  }

  return (
    <ScrollView showsVerticalScrollIndicator = {false}>
      <SafeAreaView style = {styles.bg}>
        <FlatList
        ListHeaderComponent={
          <View>
            <Header/>
            <Text style = {[styles.title, {marginHorizontal: 12, marginTop: '0.5rem'}]}>{pageTitle}</Text>
              <View style = {{alignItems: 'space-between', marginHorizontal: 6}}>
              {isOfertes()}
              </View>

          </View>
          }

        data={listContent}

        showsHorizontalScrollIndicator={false}

        renderItem={({item}) => 
          <Pressable style = {[styles.list, {width: '95%', margin: 'auto'}]} onPress = { goDetails } >
            <Text style = {styles.listTitle}>{item.title}</Text>
            <Image source = {require('../assets/Icons/list-next-icon.png')} />
          </Pressable>  
          }

        />
        
        <View style = {{marginBottom: 36}}></View>
      </SafeAreaView>
    </ScrollView>
  );
}

// Get heigth of screen
const screenHeight = Dimensions.get('window').height;
console.log(screenHeight);

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#ffffff',
  },

  // main: {
  //   height: screenHeight,
  //   marginTop: 12,
  //   marginBottom: 80,
  //   marginHorizontal: 12,
  // },

  title: {
    fontWeight: 700,
    fontSize: '1.25rem',
    marginBottom: '0.2rem',
  },

  list: {
    borderBottom: '1px solid #d5d5d5',
    width: '100%',
    paddingHorizontal: '0.6rem',
    paddingVertical: '1rem',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  listTitle: {
    fontSize: '1.25rem',
    color: '#333333',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '0.5rem',
  },

  filterButton: {
    backgroundColor: '#ffffff',
    borderColor: '#E03E52',
    borderWidth: 2,
    width: '94px',
    height: '50px',
  },

  filterButtonActive: {
    backgroundColor: '#E03E52',
    borderColor: '#E03E52',
    borderWidth: 2,
    width: '94px',
    height: '50px',
    color: '#ffffff'
  }

});

import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Button, Dimensions, FlatList, Image, Pressable, TouchableHighlight } from 'react-native';
import { useRoute } from '@react-navigation/native';

import Header from './HeaderMenu';

export default function ListPage({ navigation }) {
  // Variables
  var route = useRoute();
  var routeName = route.name;
  var pageTitle;
  var listContent = [];
  
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
  } else {
    pageTitle = "Ofertes d'ocupació" 
  }

  // Content of list Items
  for (let i = 0; i < 26; i++) {
    listContent[i] = {key: routeName + " " + (i+1)};
  }

  function goDetails() {
    navigation.navigate('Detall');
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
    <View style = {styles.bg}>

      <View style = {styles.main}>
        <FlatList
        ListHeaderComponent={
          <View>
            <Text style = {styles.title}>{pageTitle}</Text>
              <View>
               {isOfertes()}
              </View>

          </View>
          }

        data={listContent}

        showsHorizontalScrollIndicator={false}

        renderItem={({item}) => 
          <Pressable style = {styles.list} onPress = { goDetails } >
            <Text style = {styles.listTitle}>{item.key}</Text>
            <Image source = {require('../assets/Icons/next-icon.svg')} />
          </Pressable>  
          }
        />
        <View style = {{marginBottom: screenHeight-620}}></View>
      </View>
    </View>
  );
}

// Get heigth of screen
const screenHeight = Dimensions.get('window').height;
console.log(screenHeight);

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#ffffff',
  },

  main: {
    height: screenHeight - 122,
    marginTop: 12,
    marginBottom: 80,
    marginHorizontal: 12,
  },

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

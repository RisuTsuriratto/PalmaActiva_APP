import * as React from 'react';
import { View, Text, StyleSheet, Button, Dimensions, FlatList, Image, Pressable } from 'react-native';
import { useRoute } from '@react-navigation/native';

import FixedMenu from './FixedMenu';
import DeviceInfo from './DeviceInfo';
import Header from './HeaderMenu';

export default function ListPage() {
  // Variables
  var route = useRoute();
  var routeName = route.name;
  var pageTitle;
  var listContent = [];

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

  return (
    <View style = {styles.bg}>
      <DeviceInfo />
      <Header />

      <View style = {styles.main}>
        <FlatList
        ListHeaderComponent={<Text style = {styles.title}>{pageTitle}</Text>}

        data={listContent}

        showsHorizontalScrollIndicator={false}

        renderItem={({item}) => 
          <Pressable style = {styles.list}>
            <Text style = {styles.listTitle}>{item.key}</Text>
            <Image source = {require('../assets/Icons/next-icon.svg')} />
          </Pressable>  
          }
        />
        <View style = {{marginBottom: 190}}></View>
      </View>

    </View>
  );
}


// Get heigth of screen
const screenHeight = Dimensions.get('window').height;

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
  }
});

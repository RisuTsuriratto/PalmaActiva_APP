import * as React from 'react';
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';

import FixedMenu from './FixedMenu';
import DeviceInfo from './DeviceInfo';
import Header from './HeaderMenu';

export default function ListPage() {
  // Variables
  var route = useRoute();
  var routeName = route.name;

  return (
    <View>
      <DeviceInfo />
      <Header />
      <View style = {styles.main}>
        <Text> Holiii soy la página de {routeName.toLowerCase()}</Text>
      </View>
    </View>
  );
}


// Get heigth of screen
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  main: {
    height: screenHeight - 122,
    marginTop: 12,
    marginBottom: 80,
    marginHorizontal: 12,
  },
});

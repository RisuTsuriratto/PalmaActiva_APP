import * as React from 'react';
import { View, Text, StyleSheet, Button, Dimensions } from 'react-native';

import FixedMenu from './FixedMenu';

export default function DeviceInfo({ navigation }) {
  function goBack() {
    navigation.navigate('Home');
  }

  return (
    <View>
      <View style = {styles.main}>
        <Text> Holiii soy la página de cursos</Text>
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

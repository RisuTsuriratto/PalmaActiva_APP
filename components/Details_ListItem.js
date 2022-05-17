import * as React from 'react';
import { Text, View, Image, Pressable, Dimensions, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';

// Details List Item
export default function Details({ navigation }) {
  function goCursos() {
    navigation.navigate('Cursos');
  }

  return (
      <SafeAreaView style = {{ backgroundColor: '#ffffff' }}>
     
        <View style = {styles.main}>
          <Text> Hola soy el detalle </Text>
        </View>
        
      </SafeAreaView>
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

});

import React, {useState} from 'react';
import {View, StyleSheet, Text } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Menu() {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Español', value: 'ESP',
    containerStyle: {
      width: 140,
      left: 10,
      padding: 10,
      zIndex: 10
    }},
    {label: 'Català', value: 'CAT',
    containerStyle: {
      padding: 10,
      zIndex: 10
    }},
  ]);


  return (
    <View style={styles.container}>
      <Triangle/>
      <View style={styles.borde}>
        <DropDownPicker
          open={true}
          value={value}
          items={items}
          placeholder=""
          showArrowIcon={false}
          onSelectItem={(item) => {
            console.log(item);
          }}
          arrowIconStyle={{
            left: 140,
            width: 20,
            height: 10,
            color: '#E03E52'
          }}
          textStyle={{
            fontSize: 20,
            textAlign: 'center',
            color: '#E03E52'
          }}
          closeAfterSelecting={true}
          closeOnBackPressed={true}
          itemSeparator={true}
          itemSeparatorStyle={{
            backgroundColor: "#CFCFCF",
            width: 140,
            left: 10
          }}
          dropDownContainerStyle={{
            borderWidth: 0,
          }}
        />
        </View>
    </View>
  );

}

const Triangle = () => {
  return <View style={styles.triangle} />;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 40,
    right: 0,
    width: 165,
    backgroundColor: '#ffffff',
    zIndex: 10,
  },
  borde: {
    paddingTop:1,
    height: 100,
    borderColor: '#E03E52',
    borderWidth: 2,
  },
  triangle: {
    left: 136,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 9,
    borderRightWidth: 9,
    borderBottomWidth: 9,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#E03E52',
  }
});
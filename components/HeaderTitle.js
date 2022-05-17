import * as React from 'react';
import { Text } from 'react-native';

export default function HeaderTitle({title}) {
  return (
    <Text style = {{ color: '#ffffff', fontWeight: 600, fontSize: '1.2rem',  alignSelf:'flex-end', alignText: 'right',  paddingBottom: 10,  marginBottom: '0.4rem'}}> {title} </Text>
  );
}

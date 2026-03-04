import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity} from 'react-native';
import symbolOn from './assets/pictures/symbol-on.png';
import symbolOff from './assets/pictures/symbol-off.png';

export default function App() {
  const [isActive, setisActive] = useState(false)

  function handleSymblo(){
    setisActive((oldValue:boolean) => {
      return !oldValue
    })
    
  }

  return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>
      <TouchableOpacity onPress={(handleSymblo)}>
        <Image source={isActive ? symbolOn : symbolOff}></Image>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOff: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

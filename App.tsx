import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { counterEvent } from 'react-native/Libraries/Performance/Systrace';
import Fab from './components/fab';




const localStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

    
  },
  fondo: {
    backgroundColor: '#28282B',
    
    
  },

  texto:{
    fontSize: 140,
    color: 'white',
    fontWeight: 'thin'
  },
  
 
});

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={[localStyles.container, localStyles.fondo]}>
      <Text style={localStyles.texto}>{count}</Text>
      

  

  <Fab label='+1'onPress={() => setCount(count + 1)}
  onLongpress={() => setCount(0)} 
  position='right'
  />
  


  <Fab label='reset'onPress={() => setCount(0)}
  position='left'
  />
  
      
      <StatusBar style="auto" />
    </View>
  );
}


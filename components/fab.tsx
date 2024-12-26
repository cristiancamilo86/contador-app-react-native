
 import { View, Text, Pressable, StyleSheet } from 'react-native'
 
 

 interface Props {
    label:string;
position?: 'left' | 'right'; //posicion del boton

     //metodos

  onPress?: () => void;
 onLongpress?: () => void;

  }
  
  
 



 export default function fab({
     label, onPress,onLongpress, position= 'right'} :Props) {




   return (

    
    <Pressable 
    style={({pressed})=>[Styles.floatingButton,
       position === 'right' ? Styles.positionRigth : Styles.positionleft,
      pressed ? { opacity: 0.4 } : {opacity:1}]}
    onPress={onPress}
      onLongPress={onLongpress}>
      <Text style ={{color: 'white', fontSize:28}} >  {label} </Text>
      </Pressable>
    
    
   )
    

  
  
  }
 const Styles = StyleSheet.create({
  floatingButton:{
      position: 'absolute',
      bottom: 14,
     
      padding:18,
      borderRadius: 17,
     shadowRadius:17,
       backgroundColor:'purple',
       shadowColor:'#000',
       shadowOffset:{
         width: 0,
         height: 7,
       },
       shadowOpacity: 0.41,
       elevation:5
  
    },
    positionRigth:{
      right: 15,
    },
    positionleft:{
      left: 14,
    }
 })
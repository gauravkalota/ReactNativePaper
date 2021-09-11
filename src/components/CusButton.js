import React from 'react';
import { View, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';
import 'react-native-gesture-handler';


export default function CustomButton  ({text, onpress}) {
    return(
        <TouchableOpacity onPress={onpress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  button: {
      borderRadius: 25,
      paddingVertical: 10,
      paddingHorizontal: 15,
      backgroundColor: '#090454'
    
  },
  buttonText:{
      color: 'white',
      fontWeight:'bold',
      textTransform:'uppercase',
      fontSize: 16,
      textAlign:'center'
      
  }
})


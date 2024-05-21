import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNetInfo } from '@react-native-community/netinfo'
import Icons from 'react-native-vector-icons/Feather';


export default function NoConnection({navigation}:any) {
    const {type, isConnected} = useNetInfo();
    useEffect(() => {
        if(isConnected){
            navigation.navigate('mainScreen');
        }
    })
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Brak Internetu</Text>
      <View style={styles.button}>
          <Text style={{color: 'white'}}>
          <Icons name="wifi-off" size={60} color="#fff" />  
          </Text>
      </View>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    title: {
        fontSize: 72,
    },
    button: {
        backgroundColor: '#FF961B',
        borderRadius: 100,
        padding: 15,
        minWidth:100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
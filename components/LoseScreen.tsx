import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function LoseScreen({navigation}:any) {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Przegrana</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('mainScreen')}>
          <Text style={{color: 'white', fontSize:24, fontWeight: '700'}}>ZAGRAJ PONOWNIE</Text>
      </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    title: {
        fontSize: 72,
    },
    button: {
        backgroundColor: '#FF961B',
        borderRadius: 10,
        padding: 15,
        minWidth:400,
        alignItems: 'center'
    }
})
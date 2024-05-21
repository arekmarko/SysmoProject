import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { music } from './MainScreen'

export default function EndGame({navigation}:any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Koniec gry</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('winScreen'), music.stop()}}>
            <Text style={{color: 'white', fontSize:24, fontWeight: '700'}}>WYGRANA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('loseScreen'), music.stop()}}>
            <Text style={{color: 'white', fontSize:24, fontWeight: '700'}}>PRZEGRANA</Text>
        </TouchableOpacity>
      </View>
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
    buttons: {
        flexDirection: 'row',
        gap: 50
    },
    button: {
        backgroundColor: '#FF961B',
        borderRadius: 10,
        padding: 15,
        minWidth:200,
        alignItems: 'center'
    }
})
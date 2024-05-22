import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import LottieView from 'lottie-react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import { music } from './MainScreen';

export default function WinScreen({navigation}: any) {
    const [copyText, setCopyText] = useState('NAGRODA (copy to clipboard)');
    const animationRef = useRef<LottieView>(null);
    useEffect(() => {
        animationRef.current?.play(10,80);
    })
  return (
    <View style={{flex: 1}}>
        <LottieView
          source={require('../assets/Animation - 1715935179925.json')}
          style={{width: '30%', height: '100%', position: 'absolute'}}
          autoPlay
          loop
          />
        <LottieView
          ref={animationRef}
          source={require('../assets/Animation - 1715935179925.json')}
          style={{right: 0, width: '30%', height: '100%', position: 'absolute'}}
          loop
        />
      <View style={styles.container}>
        <Text style={styles.title}>Wygrana</Text>
        <View style={{gap: 20}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => 
            {
              console.log('Copied to clipboard!');
              Clipboard.setString('test');
              setCopyText('NAGRODA (copied!)');
            }
            }>
            <Text style={{color: 'white', fontSize: 24, fontWeight: '700'}}>
              {copyText}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('mainScreen'), music.play()}}>
            <Text
              style={{fontSize: 24, fontWeight: '700', alignSelf: 'center'}}>
              OPUŚĆ GRĘ
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontSize: 72,
  },
  button: {
    backgroundColor: '#FF961B',
    borderRadius: 10,
    padding: 15,
    minWidth: 400,
    alignItems: 'center',
  },
});

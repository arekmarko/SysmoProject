import {StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import Icons from 'react-native-vector-icons/FontAwesome6';
import Sound from 'react-native-sound';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';

const myIcon = <Icons name="play" size={80} color="#fff" />
Sound.setCategory('Playback');
export const music = new Sound('music.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  // loaded successfully
  console.log('duration in seconds: ' + music.getDuration() + 'number of channels: ' + music.getNumberOfChannels());

// Play the sound with an onEnd callback
music.stop();
music.play((success) => {
  if (success) {
    console.log('successfully finished playing');
  } else {
    console.log('playback failed due to audio decoding errors');
  }
});
});
var firstTime = true;

export default function MainScreen({navigation}:any) {
  const {type, isConnected} = useNetInfo();
  music.setNumberOfLoops(-1);
  music.play();
  const [icon, setIcon] = useState('play');

  useEffect(() => {
    if(firstTime){
      navigation.navigate('onboarding');
      firstTime = false;
    }
    if(!isConnected){
      navigation.navigate('noConnection');
    }
  });

  const handleStart = () => {
    setTimeout(() => {setIcon('5')}, 0);
    setTimeout(() => {setIcon('4')}, 1000);
    setTimeout(() => {setIcon('3')}, 2000);
    setTimeout(() => {setIcon('2')}, 3000);
    setTimeout(() => {setIcon('1')}, 4000);
    setTimeout(() => {navigation.navigate('endGame')}, 5000);
    setTimeout(() => {setIcon('play')}, 5500);
  }
  return (
    <View style={styles.container}>
      <View style={{opacity: icon==='play' ? 1 : 0}}>
        <Text style={styles.title}>GLIDE ZONE</Text>
        <Text style={styles.subtitle}>by Sysmo.pl</Text>
      </View>
      <View style={{alignItems: 'center'}}>

      <TouchableOpacity disabled={icon==='play' ? false : true} style={styles.playButton} onPress={() => handleStart()}>
        <Icons name={icon} size={100} color="#fff" />
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 72,
    paddingHorizontal: 55,
  },
  subtitle: {
    fontSize: 26,
    textAlign: 'right',
  },
  playButton: {
    backgroundColor: '#FF961B',
    width: 120,
    height: 120,
    borderRadius: 60,
    paddingLeft: 10,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

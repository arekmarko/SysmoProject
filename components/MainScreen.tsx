import {
  Alert,
  AppState,
  BackHandler,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Icons from 'react-native-vector-icons/FontAwesome6';
import Sound from 'react-native-sound';
import {useNetInfo} from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';

const myIcon = <Icons name="play" size={80} color="#fff" />;
Sound.setCategory('Playback');
export const music = new Sound('music.mp3', Sound.MAIN_BUNDLE, error => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }

  music.setNumberOfLoops(-1);
  music.play();
});

export default function MainScreen({navigation}: any) {
  const appState = useRef(AppState.currentState);
  const {isConnected} = useNetInfo();
  const [icon, setIcon] = useState('play');
  const [volume, setVolume] = useState(true);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('onboarding');
      if (value!=null){
        console.log(value);
      } else {
        navigation.navigate('onboarding');
      }
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getData();
    if (!isConnected) {
      navigation.navigate('noConnection');
    }
    const subscription = AppState.addEventListener('change', nextAppState => {
      if(nextAppState==='active') {
        music.play();
      } else {
        music.pause();
      }
    }) 
  }, []);

  const handleStart = () => {
    setTimeout(() => {
      setIcon('5');
    }, 0);
    setTimeout(() => {
      setIcon('4');
    }, 1000);
    setTimeout(() => {
      setIcon('3');
    }, 2000);
    setTimeout(() => {
      setIcon('2');
    }, 3000);
    setTimeout(() => {
      setIcon('1');
    }, 4000);
    setTimeout(() => {
      navigation.navigate('endGame');
    }, 5000);
    setTimeout(() => {
      setIcon('play');
    }, 5500);
  };
  return (
    <View style={styles.container}>
      <View style={{opacity: icon === 'play' ? 1 : 0, alignSelf: 'center'}}>
        <Text style={styles.title}>GLIDE ZONE</Text>
        <Text style={styles.subtitle}>by Sysmo.pl</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          disabled={icon === 'play' ? false : true}
          style={[styles.playButton, {paddingLeft: icon === 'play' ? 10 : 0}]}
          onPress={() => handleStart()}>
          <Icons name={icon} size={100} color="#fff" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        disabled={icon === 'play' ? false : true}
        style={{
          opacity: icon === 'play' ? 1 : 0,
          position: 'absolute',
          bottom: 10,
          right: 10,
        }}
        onPress={() => {
          setVolume(!volume), volume ? music.setVolume(0) : music.setVolume(1);
        }}>
        {volume ? (
          <Icons name="volume-high" size={40} color="#000" />
        ) : (
          <Icons name="volume-xmark" size={40} color="#000" />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

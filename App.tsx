import React, { useEffect } from 'react';
import {
  Button,
  FlatList,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, { useAnimatedRef } from 'react-native-reanimated';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './components/OnboardingItem';
import MainScreen from './components/MainScreen';
import EndGame from './components/EndGame';
import LoseScreen from './components/LoseScreen';
import WinScreen from './components/WinScreen';
import NoConnection from './components/NoConnection';

const Stack = createNativeStackNavigator();

export default function App() {

  useEffect(() => {
    if(Platform.OS === 'android')
    SplashScreen.hide();
  }, []);


  return (
    <NavigationContainer>
      <StatusBar hidden/>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='mainScreen'>
        <Stack.Screen name='onboarding' component={Onboarding} />
        <Stack.Screen name='mainScreen' component={MainScreen} />
        <Stack.Screen name='endGame' component={EndGame} />
        <Stack.Screen name='loseScreen' component={LoseScreen} />
        <Stack.Screen name='winScreen' component={WinScreen} />
        <Stack.Screen name='noConnection' component={NoConnection} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    backgroundColor: '#FF961B'
  }

});



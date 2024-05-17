import React, { useEffect } from 'react';
import {
  Button,
  FlatList,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import Animated, { useAnimatedRef } from 'react-native-reanimated';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingItem from './components/OnboardingItem';

const Stack = createNativeStackNavigator();

export default function App() {
  const flatlistRef = useAnimatedRef<FlatList<any>>();

  useEffect(() => {
    if(Platform.OS === 'android')
    SplashScreen.hide();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden/>
      <Animated.FlatList
      ref={flatlistRef}
        data={onboardingData}
        renderItem={({item,index}) => {
          return <OnboardingItem item={item} index={index} flatlistRef={flatlistRef}/>;
        }}
        keyExtractor={item => item.id}
        scrollEventThrottle={16}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
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

const onboardingData = [
  {
    id: '1',
    title: 'Onboarding 1',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque orci at nisi maximus dictum. Quisque sem augue, dictum in ipsum vel, aliquet elementum justo.',
    buttonColor: '#FF961B',
  },
  {
    id: '2',
    title: 'Onboarding 2',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque orci at nisi maximus dictum. Quisque sem augue, dictum in ipsum vel, aliquet elementum justo.',
  },
  {
    id: '3',
    title: 'Onboarding 3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque orci at nisi maximus dictum. Quisque sem augue, dictum in ipsum vel, aliquet elementum justo.',
  },
]

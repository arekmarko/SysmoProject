import {
  Button,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import Animated, {
  AnimatedRef,
  scrollTo,
  useAnimatedRef,
} from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
  item: any;
  index: number;
  flatlistRef: AnimatedRef<FlatList<any>>;
  navigation: any;
};

const OnboardingItem = ({item, index, flatlistRef, navigation}: Props) => {
  const {width: SCREEN_WIDTH} = useWindowDimensions();
  const storeData = async () => {
    try {
      await AsyncStorage.setItem('onboarding', 'false');
      console.log('saved');
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <View style={[styles.itemContainer, {width: SCREEN_WIDTH}]}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={{paddingHorizontal: 200, justifyContent: 'center'}}>
        <Text
          style={[styles.textButton, {color: 'black', paddingVertical: 20}]}>
          {item.text}
        </Text>
        <TouchableHighlight
          style={styles.button}
          onPress={() =>
            index < 2
              ? flatlistRef.current?.scrollToIndex({index: index + 1})
              : (navigation.navigate('mainScreen'),
                storeData())
          }>
          <Text style={[styles.textButton, {color: 'white'}]}>
            {index < 2 ? 'DALEJ' : 'ROZPOCZNIJ GRĘ'}
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default function Onboarding({navigation}: any) {
  const flatlistRef = useAnimatedRef<FlatList<any>>();
  return (
    <View style={{flex: 1}}>
      <Animated.FlatList
        ref={flatlistRef}
        data={onboardingData}
        renderItem={({item, index}) => {
          return (
            <OnboardingItem
              item={item}
              index={index}
              flatlistRef={flatlistRef}
              navigation={navigation}
            />
          );
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
  itemContainer: {
    flex: 1,
    marginVertical: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  title: {
    fontSize: 72,
    color: 'black',
  },
  button: {
    backgroundColor: '#FF961B',
    height: 60,
    paddingHorizontal: 20,
    margin: 20,
    minWidth: 200,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 15,
  },
  textButton: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
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
];

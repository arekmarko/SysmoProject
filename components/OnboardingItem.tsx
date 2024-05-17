import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import { AnimatedRef, scrollTo } from 'react-native-reanimated';

type Props = {
  item: any;
  index: number;
  flatlistRef: AnimatedRef<FlatList<any>>;
};

const OnboardingItem = ({item, index, flatlistRef}: Props) => {
  const {width: SCREEN_WIDTH} = useWindowDimensions();
  return (
    <View style={[styles.itemContainer, {width: SCREEN_WIDTH}]}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={{paddingHorizontal: 200, justifyContent: 'center'}}>
        <Text style={[styles.textButton, {color: 'black', paddingVertical: 20}]}>{item.text}</Text>
        <TouchableHighlight style={styles.button} onPress={() => index<2 ? flatlistRef.current?.scrollToIndex({index: index+1}) : console.log('Rozpocznij')}>
          <Text style={[styles.textButton, {color: 'white'}]}>{index<2 ? 'DALEJ' : 'ROZPOCZNIJ GRĘ'}</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default OnboardingItem;

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

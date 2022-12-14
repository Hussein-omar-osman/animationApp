/* eslint-disable react-native/no-inline-styles */
import {Dimensions, Text, TouchableOpacity} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Animated, {FadeIn} from 'react-native-reanimated';

const {width} = Dimensions.get('window');
const links = [
  'Progress',
  'Loader',
  'Spring',
  'ListAnime',
  'Theme',
  'BottomSheet',
];

type Props = {
  navigation: NavigationProp<ParamListBase>;
};

const Home = ({navigation}: Props) => {
  return (
    <SafeAreaView style={{backgroundColor: '#f6ad76', flex: 1}}>
      <Animated.View
        entering={FadeIn.duration(400)}
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {links.map((item, i) => (
          <TouchableOpacity
            key={i}
            onPress={() => navigation.navigate(item)}
            style={{
              backgroundColor: '#f7bc8f',
              width: width / 2 - 30,
              height: width / 2 - 30,
              borderRadius: 10,
              margin: 15,
              alignItems: 'center',
              justifyContent: 'center',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 7,
              },
              shadowOpacity: 0.43,
              shadowRadius: 9.51,
              elevation: 15,
            }}>
            <Text style={{color: 'black'}}>{item}</Text>
          </TouchableOpacity>
        ))}
      </Animated.View>
    </SafeAreaView>
  );
};

export default Home;

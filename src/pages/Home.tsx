/* eslint-disable react-native/no-inline-styles */
import {Button, Dimensions, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width} = Dimensions.get('window');
const links = ['Progress', 'Loader', 'Spring'];

const Home = ({navigation}) => {
  return (
    // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    //   <Button
    //     title="Progress"
    //     onPress={() => navigation.navigate('Progress')}
    //   />
    //   <View style={{marginVertical: 20}} />
    //   <Button title="Loader" onPress={() => navigation.navigate('Loader')} />
    //   <Button title="Spring" onPress={() => navigation.navigate('Spring')} />
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // backgroundColor: 'grey',
      }}>
      {links.map((item, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => navigation.navigate(item)}
          style={{
            backgroundColor: '#edf2ef',
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
    </SafeAreaView>
    // </View>
  );
};

export default Home;

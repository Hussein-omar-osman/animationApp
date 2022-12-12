/* eslint-disable react-native/no-inline-styles */
import {Button, Text, View} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Progress"
        onPress={() => navigation.navigate('Progress')}
      />
      <View style={{marginVertical: 20}} />
      <Button title="Loader" onPress={() => navigation.navigate('Loader')} />
      <Button title="Spring" onPress={() => navigation.navigate('Spring')} />
      <View
        style={{
          backgroundColor: 'black',
          width: 100,
          height: 100,
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
        <Text style={{color: 'white'}}>Shadow object</Text>
      </View>
    </View>
  );
};

export default Home;

/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import MovePan from './src/pages/MovePan';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Progress from './src/pages/Progress';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InitialPracAnime from './src/pages/InitialPracAnime';
import Home from './src/pages/Home';
import ListAnime from './src/pages/ListAnime';
import Theme from './src/pages/Theme';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Progress" component={Progress} />
          <Stack.Screen name="Loader" component={InitialPracAnime} />
          <Stack.Screen name="Spring" component={MovePan} />
          <Stack.Screen name="ListAnime" component={ListAnime} />
          <Stack.Screen name="Theme" component={Theme} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

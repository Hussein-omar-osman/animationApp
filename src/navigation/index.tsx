import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Progress from '../pages/Progress';
import InitialPracAnime from '../pages/InitialPracAnime';
import MovePan from '../pages/MovePan';
import ListAnime from '../pages/ListAnime';
import Theme from '../pages/Theme';
import BottomSheet from '../pages/BottomSheet';

const Stack = createNativeStackNavigator();

const Nav = () => {
  return (
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
        <Stack.Screen name="BottomSheet" component={BottomSheet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Nav;

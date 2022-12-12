/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
// import Follow from './src/components/Follow';
// import InitialPracAnime from './src/pages/InitialPracAnime';
import MovePan from './src/pages/MovePan';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Progress from './src/pages/Progress';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InitialPracAnime from './src/pages/InitialPracAnime';
import Home from './src/pages/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      {/* <Progress /> */}
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Progress" component={Progress} />
          <Stack.Screen name="Loader" component={InitialPracAnime} />
          <Stack.Screen name="Spring" component={MovePan} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

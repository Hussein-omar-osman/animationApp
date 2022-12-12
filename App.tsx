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
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Button, View} from 'react-native';
import {Text} from 'react-native-svg';
import InitialPracAnime from './src/pages/InitialPracAnime';

const Stack = createNativeStackNavigator();

function Home({navigation}) {
  // const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* <Text>Home Screen</Text> */}
      <Button
        title="Progress"
        onPress={() => navigation.navigate('Progress')}
      />
      <View style={{marginVertical: 20}} />
      <Button title="Loader" onPress={() => navigation.navigate('Loader')} />
      <Button title="Spring" onPress={() => navigation.navigate('Spring')} />
    </View>
  );
}

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

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

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <MovePan />
    </GestureHandlerRootView>
  );
};

export default App;

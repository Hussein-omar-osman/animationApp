/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Nav from './src/navigation';
import Splash from './src/pages/Splash';

const App = () => {
  const [loading, setLoading] = useState(true);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      {loading ? <Splash setLoading={setLoading} /> : <Nav />}
    </GestureHandlerRootView>
  );
};

export default App;

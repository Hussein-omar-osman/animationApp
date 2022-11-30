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
import {StyleSheet, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  return (
    // <GestureHandlerRootView>
    <View style={styles.container}>
      <View style={styles.circle} />
    </View>
    // </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  circle: {
    height: 80,
    aspectRatio: 1,
    backgroundColor: 'blue',
    borderRadius: 40,
    opacity: 0.8,
    // marginTop: 500,
  },
});

export default App;

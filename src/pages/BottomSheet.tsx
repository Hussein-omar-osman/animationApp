import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import BottomComp from '../components/BottomComp';

const BottomSheet = () => {
  return (
    <View style={styles.container}>
      {/* <Text>BottomSheet</Text> */}
      <StatusBar barStyle="light-content" />
      <BottomComp />
    </View>
  );
};

export default BottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111',
  },
});

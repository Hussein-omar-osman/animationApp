import {StyleSheet, View} from 'react-native';
import React from 'react';

const Follow = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
    </View>
  );
};

export default Follow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    height: 80,
    aspectRatio: 1,
    backgroundColor: 'blue',
    borderRadius: 40,
    opacity: 0.8,
  },
});

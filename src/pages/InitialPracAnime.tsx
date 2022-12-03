import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';

const SIZE = 100;

const InitialPracAnime = () => {
  const progress = useSharedValue(0.5);
  const scale = useSharedValue(2);

  // This is a worklet function that is executed in the ui thread;
  const handleRotation = (num: Animated.SharedValue<number>) => {
    'worklet';
    return `${num.value * 2 * Math.PI}rad`;
  };

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      // opacity: progress.value,
      transform: [{scale: scale.value}, {rotate: handleRotation(progress)}],
      borderRadius: (progress.value * SIZE) / 2,
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withSpring(1), 7, true);
    scale.value = withRepeat(withSpring(1), 7, true);
  }, [progress, scale]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedView, reanimatedStyle]} />
    </View>
  );
};

export default InitialPracAnime;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animatedView: {
    height: SIZE,
    width: SIZE,
    backgroundColor: 'blue',
  },
});

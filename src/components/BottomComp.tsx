import {Dimensions, StyleSheet, View} from 'react-native';
import React, { useEffect } from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const BottomComp = () => {
  const translateY = useSharedValue(0);
  const context = useSharedValue({y: 0});

  const gesture = Gesture.Pan()
    .onStart(() => (context.value = {y: translateY.value}))
    .onUpdate(event => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, -SCREEN_HEIGHT);
    });

  const rMain = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  useEffect(() => {
    translateY.value = withSpring(-SCREEN_HEIGHT / 3, {damping: 50});
  }, []);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.main, rMain]}>
        <View style={styles.line} />
      </Animated.View>
    </GestureDetector>
  );
};

export default BottomComp;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    height: SCREEN_HEIGHT,
    width: '100%',
    position: 'absolute',
    top: SCREEN_HEIGHT,
    borderRadius: 25,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'grey',
    borderRadius: 2,
    alignSelf: 'center',
    marginVertical: 15,
  },
});

import {Dimensions, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

const BottomComp = () => {
  const translateY = useSharedValue(0);
  const context = useSharedValue({y: 0});

  const gesture = Gesture.Pan()
    .onStart(() => (context.value = {y: translateY.value}))
    .onUpdate(event => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
    });

  const rMain = useAnimatedStyle(() => {
    const borderRadius = interpolate(
      translateY.value,
      [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
      [25, 5],
      Extrapolate.CLAMP,
    );
    return {
      borderRadius,
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

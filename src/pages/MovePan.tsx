import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';

const WINDOWWIDTH = Dimensions.get('screen').width;

const SIZE = WINDOWWIDTH / 4;
const CIRCLE_RADIUS = WINDOWWIDTH - 10;

// const windowWidth = Dimensions.get('screen').width;

// console.log(windowWidth);

type ContextType = {
  translateX: number;
  translateY: number;
};

const MovePan = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGesterEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextType
  >({
    onStart: (event, context) => {
      // context is used to sustain the initial values so that it doesn't start from the beginning
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
    onEnd: () => {
      const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);

      console.log('distance = ', distance);
      console.log('CIRCLE_RADIUS = ', CIRCLE_RADIUS / 2);

      if (distance < CIRCLE_RADIUS / 2 + SIZE / 2) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <PanGestureHandler onGestureEvent={panGesterEvent}>
          <Animated.View style={[styles.square, rStyle]} />
        </PanGestureHandler>
      </View>
    </View>
  );
};

export default MovePan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    height: SIZE,
    width: SIZE,
    backgroundColor: 'rgba(0, 0, 256, 0.5)',
    borderRadius: 20,
  },
  circle: {
    height: CIRCLE_RADIUS,
    width: CIRCLE_RADIUS,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: CIRCLE_RADIUS / 2,
    borderWidth: 5,
    borderColor: 'rgba(0, 0, 256, 0.5)',
  },
});

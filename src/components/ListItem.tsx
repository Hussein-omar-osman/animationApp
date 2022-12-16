import {StyleSheet, ViewToken} from 'react-native';
import React, {memo} from 'react';
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

type ListItemProps = {
  viewableItems: Animated.SharedValue<ViewToken[]>;
  item: {
    id: number;
  };
};

const ListItem: React.FC<ListItemProps> = memo(({viewableItems, item}) => {
  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter(sItem => sItem.isViewable)
        .find(viewableItem => viewableItem.item.id === item.id),
    );
    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withSpring(isVisible ? 1 : 0.5),
        },
      ],
    };
  }, []);

  return <Animated.View style={[styles.sList, rStyle]} />;
});

export default ListItem;

const styles = StyleSheet.create({
  sList: {
    height: 60,
    width: '90%',
    backgroundColor: '#78CAD2',
    marginTop: 20,
    borderRadius: 15,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

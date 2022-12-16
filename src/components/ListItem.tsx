import {StyleSheet, View, ViewToken} from 'react-native';
import React, {memo} from 'react';
import Animated from 'react-native-reanimated';

type ListItemProps = {
  viewableItems: Animated.SharedValue<ViewToken[]>;
};

const ListItem: React.FC<ListItemProps> = memo(() => {
  return <View style={styles.sList} />;
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

import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';

const ListAnime = () => {
  const data = new Array(3).fill(0).map((_, i) => ({
    id: i,
  }));
  return (
    <View style={styles.container}>
      <FlatList data={data} renderItem={() => <View style={styles.sList} />} />
    </View>
  );
};

export default ListAnime;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  sList: {
    height: 60,
    width: '90%',
    backgroundColor: 'red',
  },
});

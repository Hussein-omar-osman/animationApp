import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ListAnime = () => {
  const data = new Array(50).fill(0).map((_, i) => ({
    id: i,
  }));
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View key={item.id} style={styles.sList}>
            <Text style={styles.text}>{item.id}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ListAnime;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#fff',
  },
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
  text: {color: '#fff', fontSize: 20},
});

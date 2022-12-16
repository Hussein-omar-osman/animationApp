import {FlatList, StyleSheet, View, ViewToken} from 'react-native';
import React from 'react';
import ListItem from '../components/ListItem';
import {useSharedValue} from 'react-native-reanimated';

const ListAnime = () => {
  const data = new Array(50).fill(0).map((_, i) => ({
    id: i,
  }));
  const viewableItems = useSharedValue<ViewToken[]>([]);
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{paddingTop: 40}}
        data={data}
        onViewableItemsChanged={({viewableItems: vItems}) =>
          (viewableItems.value = vItems)
        }
        renderItem={({item}) => (
          <ListItem key={item.id} item={item} viewableItems={viewableItems} />
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

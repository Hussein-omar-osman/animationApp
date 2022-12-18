import {StyleSheet, View} from 'react-native';
import React from 'react';
import Loading from '../assets/loading.json';
import Lottie from 'lottie-react-native';

type Props = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const Splash = ({setLoading}: Props) => {
  return (
    <View style={styles.main}>
      <Lottie
        source={Loading}
        autoPlay
        loop={false}
        resizeMode="cover"
        onAnimationFinish={() => setLoading(false)}
      />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  main: {flex: 1, margin: 0, alignItems: 'center'},
});

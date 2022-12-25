import {StyleSheet, Switch, Text, View} from 'react-native';
import React, {useState} from 'react';

const Colors = {
  dark: {
    background: '#1e1e1e',
    circle: '#252525',
    text: '#f8f8f8',
  },
  light: {
    background: '#f8f8f8',
    circle: '#fff',
    text: '#1e1e1e',
  },
};

const SWITCH_TRACK_COLOR = {
  true: 'rgba(256,0,256,0.2)',
  false: 'rgba(0,0,0,0.1)',
};

type ThemeType = 'light' | 'dark';

const Theme = () => {
  const [themeState, setThemeState] = useState<ThemeType>('light');
  return (
    <View style={styles.container}>
      <Switch
        value={themeState === 'dark'}
        onValueChange={toggled => {
          setThemeState(toggled ? 'dark' : 'light');
        }}
      />
    </View>
  );
};

export default Theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

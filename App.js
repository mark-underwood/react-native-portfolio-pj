import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import * as ScreenOrientation from "expo-screen-orientation";
import { StyleSheet, Text, View } from 'react-native';
import LeftController from './components/LeftController';
import MainUnit from './components/MainUnit';
import RightController from './components/RightController';

export default function App() {
  const [orientation, setOrientation] = useState(null);
  useEffect(() => {
    checkOrientation();
    const subscription = ScreenOrientation.addOrientationChangeListener(handleOrientationChange);
    return () => {
      ScreenOrientation.removeOrientationChangeListeners(subscription);
    }
  }, []);
  const checkOrientation = async () => {
    const orientation = await ScreenOrientation.getOrientationAsync();
    setOrientation(orientation);
  };
  const handleOrientationChange = (o) => {
    setOrientation(o.orientationInfo.orientation);
  };
  return (
    
    <View style={styles.vertical}>
      {/* Main will show here in portrait mode */}
      { (orientation == 1 || orientation == 2) && <MainUnit /> }
      <View style={styles.horizontal}>
        {/* Left Controller */}
        <LeftController />
        {/* Main will show here in landscape mode */}
        {/* <Text>ORIENTATION: {orientation}</Text> */}
        { (orientation == 3 || orientation == 4) && <MainUnit /> }
        {/* Right Controller */}
        <RightController />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  vertical: {
    flex: 1,
    flexDirection: 'column',
    color: 'white',
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontal: {
    flex: 1,
    flexDirection: 'row',
    color: 'white',
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'top',
  }
});

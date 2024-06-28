import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import * as ScreenOrientation from "expo-screen-orientation";
import { Platform, StyleSheet, Text, View, Appearance } from 'react-native';
import Constants from 'expo-constants';
import LeftController from './things/LeftController';
import MainUnit from './things/MainUnit';
import RightController from './things/RightController';

export default function App() {
  // Always use dark mode
  // https://stackoverflow.com/questions/64551683/how-to-force-disable-android-dark-mode-in-react-native

  useEffect(() => Appearance.setColorScheme('dark'), []); // the app must always be dark mode

  // Reference for Screen Orientation:
  // https://blog.logrocket.com/managing-orientation-changes-react-native-apps/
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

// // The following line with ternary operator is adapted from
// // React Native Nucampsite project.
// paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight

const styles = StyleSheet.create({
  vertical: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
    flexDirection: 'column',
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontal: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'top',
  }
});

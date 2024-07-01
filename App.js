import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import * as ScreenOrientation from "expo-screen-orientation";
import { Platform, StyleSheet, View, Appearance } from 'react-native';
import Constants from 'expo-constants';
import LeftController from './things/LeftController';
import MainUnit from './things/MainUnit';
import RightController from './things/RightController';
import { Provider } from 'react-redux';
import { store } from './redux/store';

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
  // const [leftController_LEFT_Button, setLeftController_LEFT_Button] = useState(false);
  // const [leftController_UP_Button, setLeftController_UP_Button] = useState(false);
  // const [rightController_UP_Button, setRightController_UP_Button] = useState(false);
  // const [rightController_RIGHT_Button, setRightController_RIGHT_Button] = useState(false);

  // buttons holds the boolean state of all 'things' buttons.
  // s = start / Left Controller, e = end / Right Controller
  const [buttons, setButtons] = useState({
    sLeft: false,
    sUp: false,
    eUp: false,
    eRight: false
  }); // More action buttons such as fullscreen may be added later

  // buttons object gets passed as a prop to MainUnit to register presses
  return (
    <Provider store={store}>
      <View style={styles.vertical}>
        {/* Main will show here in portrait mode */}
        { (orientation == 1 || orientation == 2) && <MainUnit buttons={buttons} /> }
        <View style={styles.horizontal}>
          {/* Left Controller */}
          <LeftController />
          {/* Main will show here in landscape mode */}
          {/* <Text>ORIENTATION: {orientation}</Text> */}
          { (orientation == 3 || orientation == 4) && <MainUnit  buttons={buttons}/> }
          {/* Right Controller */}
          <RightController />
        </View>
        <StatusBar style="auto" />
      </View>
    </Provider>
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

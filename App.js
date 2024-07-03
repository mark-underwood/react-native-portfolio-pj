import { StatusBar } from 'expo-status-bar';
import React, { StrictMode, useEffect, useState } from 'react';
import * as ScreenOrientation from "expo-screen-orientation";
import {
  Platform,
  StyleSheet,
  View,
  Appearance,
  useColorScheme,
  useWindowDimensions
 } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Constants from 'expo-constants';
import windowSize from './utils/windowSize';
import getShortDim from './utils/getShortDim';
import LeftController from './things/LeftController';
import MainUnit from './things/MainUnit';
import RightController from './things/RightController';
import { Provider } from 'react-redux';
import { store } from './redux/store';

export default function App() {
  //////////
  // DARK MODE: always.
  // app.json must include...

  //////////
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
  
  //////////
  // https://reactnative.dev/docs/usewindowdimensions
  const windowDimensions = useWindowDimensions();
  // const {
  //   height: windowHeight,
  //   width: windowWidth,
  //   scale: windowScale,
  //   fontScale: windowFontScale
  // } = windowDimensions;
  // const [winDim, setWinDim] = useState({
  //   ...windowDimensions, shortDim: null, longDim: null
  // })
  // console.log('Font scale: ', windowFontScale);

  //////////
  // get Status Bar Offset where applicable
  const statusBarOffset = Platform.OS === 'ios' ? 0 : Constants.statusBarHeight;

  //////////
  // buttons holds the boolean state of all 'things' buttons.
  // s = start / Left Controller, e = end / Right Controller
  const [buttons, setButtons] = useState({
    sLeft: false,
    sUp: false,
    eUp: false,
    eRight: false
  }); // More action buttons such as fullscreen may be added later

  //////////
  // buttons object gets passed as a prop to MainUnit to register presses
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: statusBarOffset,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#1a1a1a'//,
      // height: ( orientation == 1 || orientation == 2 ) ? windowDimensions.height : windowDimensions.width,
      // width: ( orientation == 1 || orientation == 2 ) ? windowDimensions.width : windowDimensions.height//,
      // overflow: 'hidden'
    },
    vertical: {
      flex: 1,
      // paddingTop: statusBarOffset,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'//,
      // overflow: 'hidden'
    },
    horizontal: {
        flex: 1,
        flexDirection: 'row',
        // minWidth: { windowWidth },
        maxWidth: ( orientation == 1 || orientation == 2 ) ? windowDimensions.width : windowDimensions.height,
        alignItems: 'center',
        justifyContent: 'top'//,
        // overflow: 'hidden'
    }
  }); 
  
  //////////
  // Build extended stylesheet. Place Global/SCSS variables in
  // EStyleSheet.build({ $primary-color: '#000' }); // example with SCSS
  EStyleSheet.build(); // DO NOT REMOVE even when empty.

  return (<StrictMode>
    <View style={styles.container}>
      <Provider store={store}>
        <View style={styles.vertical}>
          {/* Main will show here in portrait mode */}
          { (orientation == 1 || orientation == 2) && <MainUnit
                // buttons={buttons}
                style={{
                  minHeight: (
                  orientation == 1 || orientation == 2 ) ? (
                    windowDimensions.height - statusBarOffset
                  ) : ( windowDimensions.width - statusBarOffset )}}
              /> }
          <View style={{
            flex: 1,
            flexDirection: 'row',
            aspectRatio: ( orientation == 1 || orientation == 2 ) ? 'auto' : '15/9',  // 15/9 16/9
            width: ( orientation == 1 || orientation == 2 ) ? windowDimensions.width : windowDimensions.height,
            alignItems: 'center',
            justifyContent: 'top',
            overflow: 'hidden'
          }}>
            {/* Left Controller */}
            <LeftController />
            {/* Main will show here in landscape mode */}
            { (orientation == 3 || orientation == 4) && <MainUnit
                // buttons={buttons}
              /> }
            {/* Right Controller */}
            <RightController />
          </View>
        </View>
        {/* <StatusBar style="auto" /> */}
      </Provider>
    </View>
  </StrictMode>);
}

// // The following line with ternary operator is adapted from
// // React Native Nucampsite project.
// paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
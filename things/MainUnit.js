import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from "react-redux";
import {
  actionButtonsReducer, sLeft, sUp, eUp, eRight
} from '../components/actionButtons/actionButtonsSlice';
import EStyleSheet from 'react-native-extended-stylesheet';
import { NavigationContainer } from '@react-navigation/native'

const MainUnit = () => {
    // const stateAll = useSelector(
    //   (state) => state
    // );
    // const actionButtonState = useSelector(
    //   (state) => state.actionButtons
    // );
  // const [sLeft, setSLeft] = useState(false)
  // const { sLeft, sUp, eUp, eRight } = useSelector((state) => state.action.sLeft);
  // const sLeft = useSelector((state) => state.action.sLeft);

  // const [sUp, setSUp] = useState(false)
  // const sUp = useSelector((state) => state.action.sLeft);

  // const [eUp, setEUp] = useState(false)
  // const eUp = useSelector((state) => state.action.eUp);

  // const [eRight, setERight] = useState(false)
  // const eRight = useSelector((state) => state.action.eRight);

    // const sLeftState = useSelector(
    //   (state) => state.actionButtons.sLeft
    // );
    // const sUpState = useSelector(
    //   (state) => state.actionButtons.sUp
    // );
    // const eUpState = useSelector(
    //   (state) => state.actionButtons.eUp
    // );
    // const eRightState = useSelector(
    //   (state) => state.actionButtons.eRight
    // );
  // // these worked:
  // console.log(buttons.sLeft);
  // console.log(buttons.sUp);
  // console.log(buttons.eUp);
  // console.log(buttons.eRight);

  return (
    <View style={{
      flex: 1,
      padding: 2,
      aspectRatio: 1,
      // width: {shortDim},
      // height: {shortDim},
      backgroundColor: "#343434"
    }}>
      <View style={styles.mainWindow}>
        <Text style={{
          color: "white",
          alignSelf: 'center'}}>| Main Unit |</Text>
        <View style={{
          flex: 1,
          flexDirection:'row',
          alignSelf: 'center'}}>
        <Text style={{color: sLeft ? "gold" : "gray"}}>
          {`sLeft is ${sLeft}`}
        </Text>
        <Text style={{color: "white"}}> | </Text>
        <Text style={{color: sUp ? "gold" : "gray"}}>
          {`sUp is ${sUp}`}
        </Text>
        <Text style={{color: "white"}}> | </Text>
        <Text style={{color: eUp ? "gold" : "gray"}}>
          {`eUp is ${eUp}`}
        </Text>
        <Text style={{color: "white"}}> | </Text>
        <Text style={{color: eRight ? "gold" : "gray"}}>
          {`eRight ${eRight}`}
        </Text>
        </View>
        <NavigationContainer overflow='hidden'>
        </NavigationContainer>
      </View>
    </View>
  );
};

const styles = {
  mainWindow: {
    aspectRatio: 1,
    backgroundColor: "#000"
  }
}

export default MainUnit;
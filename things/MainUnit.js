import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from "react-redux";
// import {
//   sLeft, sUp, eUp, eRight
// } from '../components/actionButtons/actionButtonsSlice';
// import EStyleSheet from 'react-native-extended-stylesheet';
import { NavigationContainer } from '@react-navigation/native'

const MainUnit = () => {
  const { sLeft, sUp, eUp, eRight } = useSelector((state) => state.actionButtons);
  // console.log(typeof sLeft);
  // console.log(typeof sUp);
  // console.log(typeof eUp);
  // console.log(typeof eRight);

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
          alignSelf: 'center',
          justifyContent: 'center'
          }}>
        <Text style={{color: sLeft ? "gold" : "gray"}}>
          {`sLeft: ${sLeft ? 'Y' : 'N' }`}
        </Text>
        <Text style={{color: "white"}}> | </Text>
        <Text style={{color: sUp ? "gold" : "gray"}}>
          {`sUp: ${sUp ? 'Y' : 'N' }`}
        </Text>
        <Text style={{color: "white"}}> | </Text>
        <Text style={{color: eUp ? "gold" : "gray"}}>
          {`eUp: ${eUp ? 'Y' : 'N' }`}
        </Text>
        <Text style={{color: "white"}}> | </Text>
        <Text style={{color: eRight ? "gold" : "gray"}}>
          {`eRight: ${eRight ? 'Y' : 'N' }`}
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
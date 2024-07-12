import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from "react-redux";
// import {
//   sLeft, sUp, eUp, eRight
// } from '../components/actionButtons/actionButtonsSlice';
// import EStyleSheet from 'react-native-extended-stylesheet';
import { NavigationContainer } from '@react-navigation/native'

const MainUnit = (props) => {
  const { isLandscape } = props;
  const { sLeft, sUp, eUp, eRight } = useSelector((state) => state.actionButtons);

  const styles = StyleSheet.create({
    frame: {
      height: '100%',
      width: '100%',
      flex: isLandscape ? 2.4 : 0.8,
      padding: 2,
      backgroundColor: "#343434"
    },
    mainWindow: {
      flex: 1,
      backgroundColor: "#000"
    }
  });

  return (
    <View style={styles.frame}>
      <View style={styles.mainWindow}>
        {/* <Text style={{color: "white", alignSelf: 'center'}}>| Main Unit |</Text> */}
        <View style={{
          flex: 1,
          flexDirection:'row',
          alignSelf: 'center',
          justifyContent: 'center'
          }}>
        <Text style={{color: sLeft ? "gold" : "gray"}}>
          sLeft
        </Text>
        <Text style={{color: "white"}}> | </Text>
        <Text style={{color: sUp ? "gold" : "gray"}}>
          sUp
        </Text>
        <Text style={{color: "white"}}> | </Text>
        <Text style={{color: eUp ? "gold" : "gray"}}>
          eUp
        </Text>
        <Text style={{color: "white"}}> | </Text>
        <Text style={{color: eRight ? "gold" : "gray"}}>
          eRight
        </Text>
        </View>
        <NavigationContainer overflow='hidden'>
        </NavigationContainer>
      </View>
    </View>
  );
};

export default MainUnit;
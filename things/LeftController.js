import React from 'react';
import { View, Text } from 'react-native';
import { getShortDim } from '../utils/screenSize';
import {
  sButtonLeftAct,
  sButtonLeftOff,
  sButtonUpAct,
  sButtonUpOff,
} from '../utils/buttons';

const LeftController = () => {
  return (
    <View style={{width: {getShortDim}, height: {getShortDim}, backgroundColor: "#370d11"}}>
      <Text style={{color: "white"}}>\ LeftController \</Text>
    </View>
  );
};

export default LeftController;
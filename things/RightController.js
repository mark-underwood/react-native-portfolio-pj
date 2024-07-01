import React from 'react';
import { View, Text } from 'react-native';
import { getShortDim } from '../utils/screenSize';
import {
  eButtonUpAct,
  eButtonUpOff,
  eButtonRightAct,
  eButtonRightOff,
} from '../utils/buttons';

const RightController = () => {
  return (
    <View style={{height: {getShortDim}, backgroundColor: "#03333c"}}>
      <Text style={{color: "white"}}>/ RightController /</Text>
    </View>
  );
};

export default RightController;
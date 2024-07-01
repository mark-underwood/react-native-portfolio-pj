import React from 'react';
import { View, Text } from 'react-native';
import { getShortDim } from '../utils/screenSize';

const MainUnit = ({ buttons }) => {
  console.log(buttons.sLeft);
  console.log(buttons.sUp);
  console.log(buttons.eUp);
  console.log(buttons.eRight);
  return (
    <View style={{height: {getShortDim}, backgroundColor: "#000"}}>
      <Text style={{color: "white"}}>| MainUnit |</Text>
    </View>
  );
};

export default MainUnit;
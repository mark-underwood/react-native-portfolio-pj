import React, { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useDispatch } from 'react-redux'; // update button states
import EStyleSheet from 'react-native-extended-stylesheet';
import SButtonLeft from '../components/actionButtons/SButtonLeft';
import SButtonUp from '../components/actionButtons/SButtonUp';

const LeftController = () => {
  
  return (
    <View style={styles.leftController}>
      {/* <Text style={{color: 'white', alignSelf: 'center'}}>\ L-Controller \</Text> */}
      <View style={styles.row}>{/* row 1 */}
        <View style={styles.col}>{/* row 1 | col 1 */}
          <SButtonLeft />
        </View>
        <View style={styles.col}>{/* row 1 | col 2 */}
          {/* <Text> </Text> */}
        </View>
      </View>
      <View style={styles.row}>{/* row 2 */}
        <View style={styles.col}>{/* row 2 | col 1 */}
          {/* <Text> </Text> */}
        </View>
        <View style={styles.col}>{/* row 2 | col 1 */}
          <SButtonUp />{/* row 2 | col 2 */}
        </View>
      </View>
      <View style={styles.row}>{/* row 3 */}
        {/* intentionally blank - for now */}
      </View>
      <View style={styles.row}>{/* row 4 */}
        {/* intentionally blank - for now */}
      </View>
      <View style={styles.row}>{/* row 5 */}
        {/* intentionally blank - for now */}
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  leftController: {
    flex: 1,
    height: '100%',
    width: '100%',
    padding: 8,
    borderStartStartRadius: 32,
    borderEndStartRadius: 32,
    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 32,
    backgroundColor: '#370d11'
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  col: {
    flex: 1,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default LeftController;
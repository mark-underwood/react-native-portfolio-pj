import React, { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useDispatch } from 'react-redux'; // update button states
import EStyleSheet from 'react-native-extended-stylesheet';
import SButtonLeft from '../components/actionButtons/SButtonLeft';
import SButtonUp from '../components/actionButtons/SButtonUp';

const LeftController = () => {

  return (
    <View style={{
      flex: 1,
      // aspectRatio: 0.5,
      // minHeight: {shortDim},
      backgroundColor: "#370d11"
    }}>
      <View style={styles.container}>
        <Text style={{color: "white", alignSelf: 'center'}}>\ L-Controller \</Text>
        <View style={styles.row}>{/* row 1 */}
          <View style={styles.col}>{/* row 1 | col 1 */}
            <SButtonLeft />
          </View>
          <View style={styles.col}>{/* row 1 | col 2 */}
            <Text> </Text>
          </View>
        </View>
        <View style={styles.row}>{/* row 2 */}
          <View style={styles.col}>{/* row 2 | col 1 */}
            <Text> </Text>
          </View>
          <View style={styles.col}>{/* row 2 | col 2 */}
            <SButtonUp />
          </View>
        </View>
        <View style={styles.row}>{/* row 3 */}
          {/* intentionally blank - for now */}
        </View>
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    // borderStartStartRadius: '1rem',
    borderTopLeftRadius: 64,
    // borderEndStartRadius: '1rem',
    borderBottomLeftRadius: 64,
    borderBottomRightRadius: 100,
    borderTopRightRadius: 100//,
    // outerWidth: '100%',
    // outerHeight: '100%'
  },
  row: {
    flex: 1,
    flexDirection: 'row'
    // flexDirection: 'column' 
  },
  col: {
    flex: 1,
    // flexDirection: 'row',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionButtons: {
    padding: 10
  }
});

export default LeftController;
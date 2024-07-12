import React, { useEffect, useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useDispatch } from 'react-redux'; // update button states
import EStyleSheet from 'react-native-extended-stylesheet';
import EButtonUp from '../components/actionButtons/EButtonUp';
import EButtonRight from '../components/actionButtons/EButtonRight';

const RightController = () => {

  return (
    <View style={{
      flex: 1,
      height: '100%',
      width: '100%',
      borderStartEndRadius: 64,
      borderEndEndRadius: 64,
      backgroundColor: '#03333c'
    }}>
      <Text style={{color: 'white', alignSelf: 'center'}}>/ R-Controller /</Text>
      <View style={styles.row}>{/* row 1 */}
        <View style={styles.col}>{/* row 1 | col 1 */}
          {/* <Text> </Text> */}
        </View>
        <EButtonRight style={styles.col} />{/* row 1 | col 2 */}
      </View>
      <View style={styles.row}>{/* row 2 */}
        <EButtonUp style={styles.col} />{/* row 2 | col 1 */}
        <View style={styles.col}>{/* row 2 | col 2 */}
            {/* <Text> </Text> */}
        </View>
      </View>
      <View style={styles.row}>{/* row 3 */}
        {/* intentionally blank - for now */}
      </View>
    </View>
  );
};

const styles = EStyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  col: {
    flex: 1,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionButtons: {
    padding: 10
  }
});

export default RightController;
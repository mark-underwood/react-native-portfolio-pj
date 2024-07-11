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
      // aspectRatio: 0.5,
      // minHeight: {shortDim},
      backgroundColor: "#03333c"
    }}>
      <View style={styles.container}>
        <Text style={{color: "white", alignSelf: 'center'}}>/ R-Controller /</Text>
        <View style={styles.row}>{/* row 1 */}
          <View style={styles.col}>{/* row 1 | col 1 */}
            <Text> </Text>
          </View>
          <View style={styles.col}>{/* row 1 | col 2 */}
            <EButtonRight />
          </View>
        </View>
        <View style={styles.row}>{/* row 2 */}
          <View style={styles.col}>{/* row 2 | col 1 */}
            <EButtonUp />
          </View>
          <View style={styles.col}>{/* row 2 | col 2 */}
              <Text> </Text>
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
    borderTopRightRadius: '1rem',
    borderBottomRightRadius: '1rem',
    outerWidth: '100%',
    outerHeight: '100%'
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
  },
  actionButtons: {
    padding: 10
  }
});

export default RightController;
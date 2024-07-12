import React from 'react';
import { ImageBackground, View, Text } from 'react-native';
import { styles, props } from './actionButtonStyles';

const ActionButton = ({ title }) => {
    const actionButtonImage = '';

  return (
    <View style={styles.actionButton}>
        {/* <ImageBackground
            source={actionButtonImage}
            style={styles.imageBackground}
        > */}
            <Text style={styles.actionButtonLabel}>
                {title}
            </Text>
        {/* </ImageBackground> */}
    </View>
  )
}

export default ActionButton
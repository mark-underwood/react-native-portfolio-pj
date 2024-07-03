import React from 'react';
import { Button, ImageBackground, Text } from 'react-native';
import { styles, props } from './actionButtonStyles';

const ActionButton = ({ title }) => {
    const actionButtonImage = '';

  return (
    <ImageBackground
        source={actionButtonImage}
        style={styles.imageBackground}
    >
        {/* <Button
            title={title}
            color={props.color}
            disabled
            style={styles.actionButtons}
        /> */}
        <Text>
            {title}
        </Text>
    </ImageBackground>
  )
}

export default ActionButton
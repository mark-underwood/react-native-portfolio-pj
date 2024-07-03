// import React, { useEffect, useState } from 'react';
import { Platform, Dimensions } from 'react-native';
import Constants from 'expo-constants';

// This does not return a component

const windowSize = () => {
    const windowHeight = Dimensions.get("window").height;
    const windowWidth = Dimensions.get("window").width;

    if (!Platform.OS === 'ios') {
        const safeHeight = windowHeight - Constants.statusBarHeight;
        // const safeWidth = windowWidth;

        if ( windowWidth > safeHeight ) {
            // is landscape
            return ({
                windowWidth: windowWidth,
                windowHeight: safeHeight,
                longDim: windowWidth,
                shortDim: safeHeight,
                os: Platform.OS
            });
        } else // >= in rare case of square window
            // is portrait or square
            return ({
                windowWidth: windowWidth,
                windowHeight: safeHeight,
                longDim: safeHeight,
                shortDim: windowWidth,
                os: Platform.OS
            });
    }

    if ( windowWidth > windowHeight ) {
        // is landscape
        return ({
            windowWidth: windowWidth,
            windowHeight: windowHeight,
            longDim: windowWidth,
            shortDim: windowHeight,
            os: Platform.OS
        });
    } else if ( windowWidth <= windowHeight ) { // >= in rare case of square window
        // is portrait or square
        return ({
            windowWidth: windowWidth,
            windowHeight: windowHeight,
            longDim: windowHeight,
            shortDim: windowWidth,
            os: Platform.OS
        });
    }
    
    // returns {shortDim: 0, shortDim: 0})
};

export default windowSize;
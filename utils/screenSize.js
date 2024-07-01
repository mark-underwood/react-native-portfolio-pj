import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';

// This does not return a component

export const getShortDim = () => {
    return screenSize.shortDim;
}

export const getLongDim = () => {
    return screenSize.longDim;
}

const screenSize = () => {
    const [ windowDims, setWindowDims] = useState({shortDim: 0, shortDim: 0})
    
    setWindowDims(() => {
        // Window, not screen
        const windowHeight = Dimensions.get("window").height;
        const windowWidth = Dimensions.get("window").width;
        
        if ( windowWidth < windowHeight ) {
            setWindowDims({shortDim: windowWidth, shortDim: windowHeight});
        } else if ( windowWidth >= windowHeight ) { // >= in rare case of square window
            setWindowDims({shortDim: windowHeight, shortDim: windowWidth});
        }
    }, [])

    return windowDims;
};

export default screenSize;
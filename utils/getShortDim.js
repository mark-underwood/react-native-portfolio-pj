import React from 'react'

const getShortDim = (windowDimensions, { height, width }) => {
    if ( width > height ) {
        // is landscape
        return ({...windowDimensions, 
            longDim: width,
            shortDim: height,
        });
    } else if ( width <= height ) { // >= in rare case of square window
        // is portrait or square
        return ({...windowDimensions, 
            longDim: height,
            shortDim: width,
        });
    }
}

export default getShortDim;
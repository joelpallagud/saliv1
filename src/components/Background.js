import React from 'react';
import { View, Image } from 'react-native';
import { DEFAULT_BACKGROUND } from '../img';
import { deviceHeight, deviceWidth } from '../utils/dimensions';

const Background = ({ source }) => {
    const { backgroundStyle } = styles;

    return (
        <Image
		    style={ backgroundStyle }
		    source={ source }
		  >
		</Image>
    );
};

const styles = {
    backgroundStyle: {
        backgroundColor: '#fff',
		flex: 1,
		resizeMode: 'cover',
		position: 'absolute',
		width: deviceWidth,
		height: deviceHeight,
		justifyContent: 'center',
    }
}

export default Background;

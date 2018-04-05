import React from 'react';
import { Image } from 'react-native';
import { deviceHeight, deviceWidth } from '../utils/dimensions.js';
import { LOGO } from '../img';

const Logo = () => {
    const { logoStyle } = styles;

    return (
        <Image
            style={ logoStyle }
            source={ LOGO }
        />
    );
};

const styles = {
    logoStyle: {
        width: 100,
        height: 100,
    }
}

export default Logo;

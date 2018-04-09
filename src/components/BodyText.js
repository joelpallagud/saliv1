import React from 'react';
import { View, Text } from 'react-native';
import { deviceWidth } from '../utils/dimensions.js';

const BodyText = ({ text }) => {
    const { containerStyle, bodyStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={bodyStyle}>
                { text }
            </Text>
        </View>
    );
};

const styles = {
    containerStyle: {
        alignItems: 'center',
    },
    bodyStyle: {
        fontSize: deviceWidth * 0.04,
        color: '#000',
        textAlign: 'center',
    },
};

export default BodyText;

import React from 'react';
import { View, Text } from 'react-native';
import { deviceWidth } from '../utils/dimensions.js';

const HeaderText = ({ text, style }) => {
    const { containerStyle, headerStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={[headerStyle, style]}>
                { text }
            </Text>
        </View>
    );
};

const styles = {
    containerStyle: {
        alignItems: 'center',
    },
    headerStyle: {
        fontSize: deviceWidth * 0.08,
        color: '#5F968E',
        textAlign: 'center',
        fontFamily: 'comfortaa',
    },
};

export default HeaderText;

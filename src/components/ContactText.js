import React from 'react';
import { View, Text } from 'react-native';
import { deviceWidth } from '../utils/dimensions.js';

const ContactText = ({ label, text }) => {
    const { containerStyle, labelStyle, bodyStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>
                { label }
            </Text>
            <Text style={bodyStyle}>
                { text }
            </Text>
        </View>
    );
};

const styles = {
    containerStyle: {
        flexDirection: 'row'
    },
    labelStyle: {
        fontSize: deviceWidth * 0.04,
        color: '#000',
        fontWeight: 'bold',
        fontFamily: 'robotoslab'
    },
    bodyStyle: {
        fontSize: deviceWidth * 0.04,
        color: '#000',
        fontFamily: 'robotoslab'
    },
};

export default ContactText;

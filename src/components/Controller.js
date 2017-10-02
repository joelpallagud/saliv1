import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Button from './Button';
import { LOGO } from '../img';

const Controller = ({ nextOnPress, backOnPress }) => {
    const { containerStyle, questionStyle } = styles;

    return (
            <View style={ containerStyle }>
                <Button 
                    title='Back'
                    onPress={ backOnPress }
                    style={{ width: 80 }}
                />
                <Text style={ questionStyle }>
                    Is the patient conscious?
                </Text>
                <Button 
                    title='Next'
                    onPress={ nextOnPress }
                    style={{ width: 80 }}
                />
            </View>
    );
};

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    questionStyle: {
        textAlign: 'center',
        width: 90
    }
};

export default Controller;

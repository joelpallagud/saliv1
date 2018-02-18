import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Button from './Button';
import { LOGO } from '../img';

const Controller = ({ nextOnPress, backOnPress, question }) => {
    const { containerStyle, questionStyle } = styles;

    return (
            <View style={ containerStyle }>
                <Button 
                    title='Back'
                    onPress={ backOnPress }
                    style={{ width: 80 }}
                />
                <Text style={ questionStyle }>
                    { question }
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
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    questionStyle: {
        textAlign: 'center',
        width: 120,
	fontSize: 25,
    }
};

export default Controller;

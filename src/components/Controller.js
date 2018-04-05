import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import ButtonSmall from './ButtonSmall';
import { LOGO } from '../img';

const Controller = ({ nextOnPress, backOnPress, question }) => {
    const { containerStyle, questionStyle, buttonStyle, questionContainerStyle, ButtonContainerStyle, buttonTextStyle } = styles;

    return (
            <View style={ containerStyle }>
                <View style={ questionContainerStyle }>
                    <Text style={ questionStyle }>
                        { question }
                    </Text>
                </View>
                <View style={ ButtonContainerStyle }>
                    <ButtonSmall 
                        title='NO'
                        onPress={ backOnPress }
                        style={ [buttonStyle, { borderColor: '#E05858', backgroundColor: '#E05858' }] }
                        fontStyle={ buttonTextStyle }
                    />
                    <ButtonSmall 
                        title='YES'
                        onPress={ nextOnPress }
                        style={ [buttonStyle, { borderColor: '#5F968E', backgroundColor: '#5F968E' }] }
                        fontStyle={ buttonTextStyle }
                    />
                </View>                
            </View>
    );
};

const styles = {
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    questionStyle: {
        textAlign: 'center',
        fontSize: 30,
        fontFamily: 'quicksand'
        
    },
    buttonStyle: {
        width: 100,
        borderColor: '#5F968E',
        backgroundColor: '#5F968E',
    },
    ButtonContainerStyle: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start'
    },
    questionContainerStyle: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonTextStyle: {
        color: 'white',
        fontWeight: '700',
        fontFamily: 'robotoslab',
        fontSize: 30
    }
};

export default Controller;

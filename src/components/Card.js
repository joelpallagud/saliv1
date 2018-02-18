import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { LOGO } from '../img';

const Card = ({ onPress, title }) => {
    const { containerStyle, backgroundImageStyle, titleStyle, buttonStyle } = styles;

    return (
        <TouchableOpacity onPress={ onPress }>
                <View style={ containerStyle }>
                    <Image 
                        style={ backgroundImageStyle }
                        source={ LOGO }
                    />
                    <TouchableOpacity>
                        <Text style={ buttonStyle }>
                            Learn More
                        </Text>
                    </TouchableOpacity>
                    <Text style={ titleStyle }>
                        { title }
                    </Text>
                </View>
            </TouchableOpacity>
    );
};

const styles = {
    containerStyle: {
        height: 200,
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 10,
        marginRight: 10,
        borderWidth: 1,
        justifyContent: 'space-between',
	backgroundColor: 'white',
        borderRadius: 10,
    },
    backgroundImageStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '90%',
        width: '100%',
    },
    titleStyle: {
        height: '10%',
    },
    buttonStyle: {
        height: 30,
        alignSelf: 'flex-end',
    }
};

export default Card;

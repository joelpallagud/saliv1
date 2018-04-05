import React from 'react';
import { View, Text } from 'react-native';
import Button from './Button.js';
import HeaderText from './HeaderText.js';
import ContactText from './ContactText.js';
import Logo from './Logo.js';
import { deviceHeight, deviceWidth } from '../utils/dimensions.js';

const UserInfo = ({name, email, city, number}) => {
    const { containerStyle, headerContainerStyle, imageContainerStyle, contactContainerStyle } = styles;

    return (
        <View style={ containerStyle }>
            <View style={ imageContainerStyle }>
                <Logo />
                <View style={ headerContainerStyle }>
                    <HeaderText text={ name }/>
                    <HeaderText text={ city }/>
                </View>
            </View>
            <View style={ contactContainerStyle }>
                <ContactText label='Email: ' text={ email }/>
                <ContactText label='Mobile number: ' text={ number }/>
            </View>
        </View>
    );
};

const styles = {
    containerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: deviceWidth*0.9,
        height: deviceHeight*0.25,
        borderBottomWidth: 3,
        borderBottomColor: '#D5C9B1',
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,

    },
    imageContainerStyle: {
        flexDirection: 'row',
        width:'90%',
    },
    headerContainerStyle: {
        justifyContent: 'center',
    },
    contactContainerStyle: {
        justifyContent: 'center',
        width:'90%',
        height: '30%'
    
    },
};

export default UserInfo;

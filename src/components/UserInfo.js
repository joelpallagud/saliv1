import React from 'react';
import { View } from 'react-native';
import HeaderText from './HeaderText.js';
import ContactText from './ContactText.js';
import Logo from './Logo.js';
import { deviceHeight, deviceWidth } from '../utils/dimensions.js';

const UserInfo = ({ name, email, city, number }) => {
    const {
        containerStyle,
        headerContainerStyle,
        imageContainerStyle,
        contactContainerStyle,
        nameStyle,
        cityStyle
    } = styles;

    return (
        <View style={containerStyle}>
            <View style={imageContainerStyle}>
                <Logo />
                <View style={headerContainerStyle}>
                    <HeaderText
                        text={name}
                        style={nameStyle} 
                    />
                    <HeaderText 
                        text={city}
                        style={cityStyle}
                    />
                </View>
            </View>
            <View style={contactContainerStyle}>
                <ContactText
                    label='Email: '
                    text={email}
                />
                <ContactText
                    label='Mobile number: '
                    text={number} 
                />
            </View>
        </View>
    );
};

const styles = {
    containerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        width: deviceWidth * 0.9,
        height: deviceHeight * 0.25,
        borderBottomWidth: 3,
        borderBottomColor: '#D5C9B1',
        borderBottomStartRadius: 10,
        borderBottomEndRadius: 10,

    },
    imageContainerStyle: {
        flexDirection: 'row',
        width: '90%',
    },
    headerContainerStyle: {
        justifyContent: 'center',
    },
    contactContainerStyle: {
        justifyContent: 'center',
        width: '90%',
        height: '30%'
    },
    nameStyle: {
        fontSize: deviceWidth * 0.06
    },
    cityStyle: {
        fontSize: deviceWidth * 0.05,
        color: 'black'
    }
};

export default UserInfo;

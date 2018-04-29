import React from 'react';
import { View, Text, Image } from 'react-native';
import { LOGO } from '../img';
import { deviceHeight, deviceWidth } from '../utils/dimensions';

const Card = ({ title, src }) => {
    const {
        containerStyle,
        backgroundImageStyle,
        titleStyle,
        // buttonStyle,
        titleContainerStyle
    } = styles;

    return (
        <View style={containerStyle}>
            <Image 
                style={backgroundImageStyle}
                source={src}
            />
            {/* <TouchableOpacity>
                <Text style={ buttonStyle }>
                    Learn More
                </Text>
            </TouchableOpacity> */}
            {/* <View style={titleContainerStyle}>
                <Text style={titleStyle}>
                    { title }
                </Text>
            </View> */}
        </View>
    );
};

const styles = {
    containerStyle: {
        height: deviceHeight * 0.3,
        width: deviceWidth * 0.9,
        // borderWidth: 2,
        // borderColor: 'gray',
        // justifyContent: 'flex-end',
        // backgroundColor: 'white',
        // borderRadius: 10,
        // shadowColor: 'gray',
        // shadowOpacity: 0.2,
        // shadowRadius: 2,
        // shadowOffset: { width: -1, height: 10 }
    },
    backgroundImageStyle: {
        height: deviceHeight * 0.3,
        width: deviceWidth * 0.9,
    },
    titleStyle: {
        fontFamily: 'comfortaa',
        fontSize: deviceWidth * 0.08
    },
    titleContainerStyle: {
        borderTopWidth: 2,
        borderColor: 'gray',
        height: '25%',
        backgroundColor: 'white',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    // buttonStyle: {
    //     height: 30,
    //     alignSelf: 'flex-end',
    // }
};

export default Card;

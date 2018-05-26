import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { deviceWidth, deviceHeight } from '../utils/dimensions.js';

const ButtonSmall = ({ title, onPress, style, fontStyle }) => {
    const { buttonContainerStyle, buttonStyle, textStyle } = styles;

    return (
        <View style={buttonContainerStyle}>
            <Button
                title={title}
                buttonStyle={[buttonStyle, style]} 
                color={'#262626'}
                onPress={onPress}
                textStyle={[textStyle, fontStyle]}
            />
        </View>
    );
};

const styles = {
    buttonContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: deviceWidth * 0.05,
        width: deviceWidth * 0.4,
        height: deviceHeight * 0.08
    },
    buttonStyle: {
        borderRadius: 30,
        borderWidth: 3,
        width: deviceWidth * 0.4,
        height: deviceHeight * 0.08,
        borderColor: '#BFDCCF',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowOffset: { width: -1, height: 5 },
        elevation: 3
    },
    textStyle: {
        fontSize: deviceWidth * 0.045, 
        fontFamily: 'comfortaa'
    }
};

export default ButtonSmall;

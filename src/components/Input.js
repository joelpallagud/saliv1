import React from 'react';
import { TextInput, View, Image } from 'react-native';
import { deviceWidth, deviceHeight } from '../utils/dimensions';

const Input = ({ placeholder, value, onChangeText, secureTextEntry, autoCapitalize, keyboardType, src, error }) => {
    const { inputStyle, containerStyle, iconStyle, errorStyle, errorInputStyle } = styles;
    
    return (
        <View style={(error) ? errorStyle : containerStyle}>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                placeholderTextColor={(error) ? 'red' : 'gray'}
                autoCorrect={false}
                style={(error) ? errorInputStyle : inputStyle}
                value={value}
                onChangeText={onChangeText}
                underlineColorAndroid='transparent'
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
            />
            <Image
                style={iconStyle}
                source={src}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingLeft: deviceWidth * 0.025,
        lineHeight: deviceHeight * 0.045,
        fontFamily: 'quicksand',
        flex: 1,
        fontSize: deviceWidth * 0.04
    },
    errorInputStyle: {
        color: 'red',
        paddingLeft: deviceWidth * 0.025,
        lineHeight: deviceHeight * 0.045,
        fontFamily: 'quicksand',
        flex: 1,
        fontSize: deviceWidth * 0.04
    },
    iconStyle: {
        position: 'absolute',
		right: deviceWidth * 0.025,
        marginRight: 0,
        width: 32,
        height: 32,
    },
    containerStyle: {
        backgroundColor: 'white',
        height: deviceHeight * 0.06,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    errorStyle: {
        backgroundColor: 'white',
        height: deviceHeight * 0.055,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'red',
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export default Input;

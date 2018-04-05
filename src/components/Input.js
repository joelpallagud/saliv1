import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { deviceWidth } from '../utils/dimensions';

const Input = ({ placeholder, value, onChangeText, secureTextEntry, autoCapitalize, keyboardType }) => {
    const { inputStyle, containerStyle } = styles;
    
    return (
        <View style={containerStyle}>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
		        underlineColorAndroid='transparent'
		        autoCapitalize ={autoCapitalize}
                keyboardType = {keyboardType}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: deviceWidth*0.05,
        lineHeight: 23,
        flex: 1,
        backgroundColor: 'rgba( 0, 0, 0 , 0)'
    },
    containerStyle: {
	    backgroundColor:'white',
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
    }
};

export default Input;

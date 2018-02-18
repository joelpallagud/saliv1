import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ placeholder, value, onChangeText, secureTextEntry }) => {
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
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        lineHeight: 23,
        flex: 1,
        textAlign: 'center',
    },
    containerStyle: {
	backgroundColor:'white',
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export default Input;

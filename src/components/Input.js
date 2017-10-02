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
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 1,
        textAlign: 'center'
    },
    containerStyle: {
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export default Input;

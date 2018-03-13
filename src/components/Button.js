import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

const ButtonComponent = ({ title, onPress, style, fontStyle }) => {
    const { buttonContainerStyle, buttonStyle, textStyle } = styles;

    return (
        <View style={ buttonContainerStyle }>
            <Button
                title={ title }
                buttonStyle={ [buttonStyle, style] } 
                color={ '#262626' }
                onPress={ onPress }
                textStyle={ [textStyle, fontStyle]}
            />
        </View>
    );
};

const styles = {
    buttonContainerStyle : {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 10
    },
    buttonStyle: {
        borderRadius: 30,
        width: 250,
        borderWidth: 3,
        borderColor: '#BFDCCF',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 30,
        shadowOffset: { width: -1, height: 20 }
    },
    textStyle: {
        fontSize: 24, 
        fontFamily: 'comfortaa'
    }
}

export default ButtonComponent;

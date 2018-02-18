import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';

const ButtonComponent = ({ title, onPress, style }) => {
    const { buttonContainerStyle, buttonStyle } = styles;

    return (
        <View style={ buttonContainerStyle }>
            <Button
                title={ title }
                buttonStyle={ [buttonStyle, style] } 
                color={ 'gray' }
                onPress={ onPress }
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
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'white'
    }
}

export default ButtonComponent;

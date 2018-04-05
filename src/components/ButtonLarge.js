import React from 'react';
import { View, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const ButtonLarge = ({ title, onPress, style, fontStyle }) => {
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
        marginTop: deviceWidth*.05,
        width: deviceWidth*.65,
    },
    buttonStyle: {
        borderRadius: 30,
        borderWidth: 3,
        width: deviceWidth*.65,
        borderColor: '#BFDCCF',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 30,
        shadowOffset: { width: -1, height: deviceWidth*.05 }
    },
    textStyle: {
        fontSize: deviceWidth*.045, 
        fontFamily: 'comfortaa'
    }
}

export default ButtonLarge;

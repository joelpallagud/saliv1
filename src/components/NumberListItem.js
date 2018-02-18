import React, { Component } from 'react';
import { View, TouchableHighlight, Text, FlatList } from 'react-native';
import { Button } from 'react-native-elements';

class NumberListItem extends Component {
    render() {
        const { containerStyle, buttonContainerStyle, buttonStyle, placeContainerStyle, numberContainerStyle } = styles;
        const { item, onPress } = this.props;

        return (
            <View style={ containerStyle }>
                <View style={ buttonContainerStyle }>
                    <TouchableHighlight onPress={ onPress } style={ buttonStyle }>
                        <Text>Call</Text>
                    </TouchableHighlight>
                </View>
                <View style={ placeContainerStyle }>
                    <Text>{ item.place }</Text>
                </View>
                <View style={ numberContainerStyle }>
                    <Text>{ item.number }</Text>
                </View>
            </View>
        )
    }
}

const styles = {
    containerStyle : {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonContainerStyle: {
        width: '20%',
        alignItems: 'center'
    },
    buttonStyle: {
        borderWidth: 1,
        borderRadius: 10000000,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    placeContainerStyle: {
        width: '40%'
    },
     numberContainerStyle: {
        width: '40%'
    },
}

export default NumberListItem;

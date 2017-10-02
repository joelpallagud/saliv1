import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Button from '../components/Button';
import { LOGO } from '../img';


class AboutScreen extends Component {
    render() {
        return (
            <View style={ styles.containerStyle }>
                <Text style={ styles.headerStyle } >
                    About Sali
                </Text>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        alignItems: 'center', 
        backgroundColor: 'white'
    },
    headerStyle: {
        textAlign: 'center',
        color: 'gray',
        fontSize: 24
    }
}

export default AboutScreen;

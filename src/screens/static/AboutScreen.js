import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';
import { LOGO } from '../../img';


class AboutScreen extends Component {
    static navigationOptions = {
	tabBarLabel: 'About Sali',
	tabBarIcon: () => (
	  <Image
	      source={require('../../img/asset13.png')}
	      style = {{resizeMode: 'contain', width: 25, height: 25}}
	  />
    ),
    };
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

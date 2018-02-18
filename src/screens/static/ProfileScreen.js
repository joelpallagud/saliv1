import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';
import { LOGO } from '../../img';


class ProfileScreen extends Component {
    static navigationOptions = {
	tabBarLabel: 'Profile',
	tabBarIcon: () => (
	  <Image
	      source={require('../../img/asset11.png')}
	      style = {{resizeMode: 'contain', width: 26, height: 26}}
	  />
    ),
    };
    render() {
        return (
            <View style={ styles.containerStyle }>
                <Text style={ styles.headerStyle } >
                    My Profile
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

export default ProfileScreen;

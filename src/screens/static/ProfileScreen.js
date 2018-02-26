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

    redirectLogin = () => {
	this.props.navigation.navigate("Signin")
    }

    constuctor(props)
    {
	super(props);
	this.state = {
	    user: null,
	}
    }
    componentWillMount()
    {
	firebase.auth().onAuthStateChanged((user) => {
	  if (user != null) {
	      this.setState({user})
	  }
    }

  // Do other things
});
    render() {
        return (
            <View style={ styles.containerStyle }>
                <Text style={ styles.headerStyle } >
                    My Profile
                </Text>
		{ !this.state.user &&
			<Button 
			    title = { login }
			    onPress = {this.redirectLogin}
			/>
		}
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

import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';
import {connect} from 'react-redux';
import { LOGO } from '../../img';
import firebase from '../../firebase';
import { logout, userFetch } from '../../actions';


class ProfileScreen extends Component {
    static navigationOptions = {
	tabBarLabel: 'Profile',
	tabBarIcon: () => (
	  <Image
	      source={require('../../img/asset11.png')}
	      style = {{resizeMode: 'contain', width: 26, height: 26}}
	  />
    ),
    }
    

    
    renderInfo = () => {
	console.log(this.props.profile)
	if(this.state.user){
	    return(
		<View>
		    <Text> {this.props.name} </Text>
		    <Text> {this.state.user.email} </Text>

		    <Button 
			title= "Logout"
			onPress = {this.props.logout}
		    />
		    <Button 
			title = "Update info"
			onPress = { this.redirectProfile }
		    />
		</View>
	    )
	}
    }
    redirectLogin = () => {
	this.props.navigation.navigate("Signin")
    }

    redirectProfile = () => {
	this.props.navigation.navigate("UserInfo")
    }
    

    constructor(props) {
	super(props)
	this.state = {
	    user: null,
	}
    }
    componentWillMount()
    {
	firebase.auth().onAuthStateChanged((user) => {
	    if (user != null) {
		this.setState({user})
		//this.props.userFetch();
	  }
	});
    }
    render() {
        return (
            <View style={ styles.containerStyle }>
                <Text style={ styles.headerStyle } >
                    My Profile
                </Text>
		{ !this.state.user &&
			<Button 
			    title = "Login"
			    onPress = {this.redirectLogin}
			/>
		}	
		{ this.renderInfo() }
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

const mapStateToProps = (state) => {
    return {
	text: state.auth,
	user: state.auth.user,
	name: state.profile.name,
    }
}
export default connect(mapStateToProps, {logout, userFetch})(ProfileScreen);

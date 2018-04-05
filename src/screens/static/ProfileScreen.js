import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Button from '../../components/Button';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import UserInfo from '../../components/UserInfo';
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
	      style = {{resizeMode: 'contain', width: 25, height: 25}}
	  />
    ),
    }
    
	state = {
		user: null,
	}

    renderInfo = () => {
		console.log(this.props)
		if(this.state.user) {
		    return (
				<View>
					{/* <UserInfo 
						name="Kyla Relucio" 
						city="Quezon City"
						email="sali@yahoo.com"
						number="09178909876" 
					/> */}
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
    
    componentWillMount() {
		firebase.auth().onAuthStateChanged((user) => {
		    if (user != null) {
				this.setState({user})
				//this.props.userFetch();
			}
		});
    }
    render() {
		const { containerStyle, headerContainerStyle } = styles;

        return (
            <View style={ containerStyle }>
				{/* <Background
		            source={ require('../../img/asset3.png') }
		        /> */}
				<View style={headerContainerStyle} >
					<Logo />
                	<UserInfo 
						name="Kyla Relucio" 
						city="Quezon City"
						email="sali@yahoo.com"
						number="09178909876" 
					/>
				</View>
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
    headerContainerStyle: {
		height: '50%',
		alignItems: 'center', 
		justifyContent: 'space-around'
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

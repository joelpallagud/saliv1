import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Alert, ActivityIndicator, KeyboardAvoidingView} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Input from "../../components/Input";
import Button from '../../components/Button';
import Background from '../../components/Background';
import { deviceWidth, deviceHeight } from '../../utils/dimensions';
import { LOGO } from '../../img';
import { loginUser } from '../../actions';

class SigninScreen extends Component {
    backClick = () => {
		this.props.navigation.navigate("Home");
    }

	state = {
	    email: null,
	    password: null, 
	    error: '',
	}

    submit= () => {
		this.props.loginUser(this.state.email, this.state.password);
		console.log(this.props.error)
    }



    render() {
		const { container, logo, input, headerStyle } = styles;
		const { loginHeader } = this.props.text;

		return (
		    <View style = {container}>
				<Background
				    source={ require('../../img/asset8.png') }
				/>
    	        <Image
    	            style={ logo}
    	            source={ LOGO }
    	        />
				<KeyboardAvoidingView style = {container} behavior="padding">
					<View>
							<Text style={ headerStyle }>
								{ loginHeader }
							</Text>
					</View>
				    <View style = {input}>
						<Input style = { input}
						    placeholder = "Mobile number"
						    onChangeText = { (email) => this.setState({ email}) }
						    keyboardType = "e-mail"
						/>
				    </View>
				    <View style = {input}>
						<Input style = { input}
						    placeholder = "Password"
						    autoCapitalize ={"none"}
						    secureTextEntry = {true }
						    onChangeText = { (password) => this.setState({ password}) }
						/>
				    </View>
				    <View style = {input}>
						<Button 
						    title = "Enter"
						    onPress = { this.submit }
						/>
						<ActivityIndicator size="small" color="#00ff00" animating = {this.props.loading} />
				    	<Text> { this.props.error.message} </Text>
				    </View>
				</KeyboardAvoidingView>
		    </View>
		)
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
	},
	headerStyle: {
        textAlign: 'center',
        color: '#5F968E',
        fontSize: 30,
        fontFamily: 'comfortaa',
        marginBottom: 20
    },
    logo: {
        width: deviceHeight*0.1,
        height: deviceHeight*0.1,
        position: 'absolute',
        top: deviceHeight*0.075
    },
    input: {
		paddingBottom: 10,
		width: deviceWidth*0.8,
		alignItems: 'center', 
    },
};

const mapStateToProps = (state) => {
    return {
		email: state.auth,
		error: state.auth.error,
		loading: state.auth.loading,
		text: state.text,
    }
}



export default connect(mapStateToProps, {loginUser})(SigninScreen);

import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Alert, ActivityIndicator, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';
import DatePicker from 'react-native-datepicker';
import Modal from 'react-native-modal';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

import Input from '../../components/Input';
import Background from '../../components/Background';
import Button from '../../components/Button';
import TPAModal from '../../components/TPAModal';
import TPAText from '../../components/TPAText';
import Logo from '../../components/Logo';

//import { signUp, doPasswordsMatch } from '../../helpers/firebase';
import { deviceWidth, deviceHeight } from '../../utils/dimensions';
import { signUp } from '../../actions';
import validate from "../../validate";
import validation from '../../validation';

class SignupScreen extends Component {
    state = {
	email: null,
	emailError: null,
	password: null,
	passwordError:null,
	confirmPassword: null,
	confirmPasswordError: null,
    }

    backClick = () => {
	this.props.navigation.navigate('Home');
    }

    submit = () => {
	const emailError = validate("email", this.state.email)
	const passwordError = validate("password", this.state.password)
	const confirmPasswordError = validate("confirmPassword", this.state.confirmPassword)

	this.setState ({
	    emailError: emailError,
	    passwordError:passwordError,
	    confirmPasswordError: confirmPasswordError
	})
	if (this.state.password === this.state.confirmPassword) {
	    if(!emailError && !passwordError ){
		this.props.signUp(this.state.email, this.state.password);
	    }
	} else if (this.state.password !== this.state.confirmPassword) {
	    this.setState({ loading: false });
	    Alert.alert(
		'Error signing up',
		"Passwords don't match",
		[
		    { text: 'Ok', style: 'default' }
		]
	    );
	}

    }

    onModalButtonPress = () => {
	this._toggleModal();
	const resetAction = NavigationActions.reset({
	    index: 0,
	    actions: [
		this.props.navigation.navigate('PostRegistration')
	    ] });
	this.props.navigation.dispatch(resetAction);
    }

    render() {
	const { container, avoidingContainer, input } = styles;

	return (
	    <View style={container}>
		<Background
		    source={require('../../img/asset8.png')}
		/>
		<KeyboardAvoidingView 
		    style={avoidingContainer}
		    behavior='padding'
		>
		    <View>
			<ScrollView contentContainerStyle={{ alignItems: 'center' }}>
			    <Logo />
			    <Text> { this.props.error.message} </Text>
			    <ActivityIndicator size='small' color='#00ff00' animating ={this.props.loading} />
			    <View style={input}>
				<Input
				    placeholder ='Email*'
				    keyboardType= 'email-address'
				    autoCapitalize='none'
				    onChangeText= {(email) => this.setState({ email })}
				    src={require('../../img/date_icon.png')}
				    onBlur={() => {
				    this.setState({
				      emailError: validate('email', this.state.email)
				    })
				  }}
				  error={this.state.emailError}
				/>
			    </View>
			    <View style={input}>
				<Input
				    placeholder='Password*'
				    autoCapitalize='none'
				    secureTextEntry   
				    onChangeText={(password) => this.setState({ password })}
				    src={require('../../img/date_icon.png')}
				    onBlur={() => {
				    this.setState({
				      emailError: validate('password', this.state.password)
				    })
				  }}
				  error={this.state.passwordError}
				/>
			    </View>
			    <View style={input}>
				<Input
				    placeholder='Confirm Password*'
				    autoCapitalize='none'
				    secureTextEntry
				    onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
				    src={require('../../img/date_icon.png')}
				    onBlur = {() => {
					this.setState({
					   confirmPasswordError: validate("confirmPassword", this.state.confirmPassword) 
					})
				    }}
				    error = {this.state.confirmPasswordError}
				/>
			    </View>
			</ScrollView>

		    </View>
		</KeyboardAvoidingView>
		<View style={input}>
		    <Button 
			title ='Submit'
			onPress= {this.submit}
		    />
		</View>
	    </View>
	);
    }
}

const styles = {
    container: {
	flex: 1,
	justifyContent: 'center', 
	alignItems: 'center', 
    },
    avoidingContainer: {
	height: deviceHeight * 0.75,
	justifyContent: 'center', 
	alignItems: 'center', 
    },
    logo: {
	width: 50,
	height: 50,
	alignSelf: 'center',
	marginTop: deviceWidth * 0.05
    },
    header: {
	textAlign: 'center',
	color: 'gray',
	fontSize: 24,
	marginBottom: 20
    },
    input: {
	paddingBottom: 10,
	width: deviceWidth * 0.75,
	alignItems: 'center', 
    },
    modalStyle: {
	flex: 1,
	alignItems: 'center'
    }
};

const mapStateToProps = (state) => ({
    email: state.auth,
    error: state.auth.error,
    loading: state.auth.loading,
    text: state.text,
});

export default connect(mapStateToProps, { signUp })(SignupScreen);

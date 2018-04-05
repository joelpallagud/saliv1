import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Alert, ActivityIndicator, KeyboardAvoidingView, TouchableOpacity, ScrollView} from 'react-native';
import DatePicker from 'react-native-datepicker'
import Modal from "react-native-modal";
import { NavigationActions } from 'react-navigation';
import Input from "../../components/Input";
import Background from "../../components/Background";
import Button from '../../components/Button';
import TPAModal from '../../components/TPAModal';
import TPAText from '../../components/TPAText';
import { connect } from 'react-redux';
import { LOGO } from '../../img';
//import { signUp, doPasswordsMatch } from "../../helpers/firebase";
import { deviceWidth, deviceHeight } from '../../utils/dimensions';
import { signUp } from '../../actions';

class SignupScreen extends Component {

	state = {
	    email: null,
	    password: null,
		confirmPassword: null,
		number: null,
		city: null,
		name: null,
		birthday: null,
		isModalVisible: false
	}

    backClick = () => {
		this.props.navigation.navigate("Home");
	}
	
	_toggleModal = () => {
		this.setState({ isModalVisible: !this.state.isModalVisible });
	}

    submit = () => {
		if(this.state.password ===this.state.confirmPassword) {
			this.props.signUp(this.state.email, this.state.password);
			this._toggleModal();
		}
		else if(this.state.password != this.state.confirmPassword) {
			this.setState({ loading: false });
			Alert.alert(
			    "Error signing up" ,
			    "Passwords don't match",
			    [
					{text: "Ok", style: "default"}
			    ]
			)
		}
	}

	onModalButtonPress = () => {
		this._toggleModal();
		const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                this.props.navigation.navigate('PostRegistration')
            ]});
        this.props.navigation.dispatch(resetAction)
	}

    render() {
	const { login, terms } = this.props.text;
	const { modalStyle, container, avoidingContainer, logo, input, header } = styles;
	const { email, password, confirmPassword, number, city, name, birthday, isModalVisible } = this.state;

	console.log(terms+'oooooo');
	return(
		<View style={ container }>
			<Background
			    source={ require('../../img/asset8.png') }
			/>
			<Modal isVisible={ isModalVisible } style={ modalStyle } >
        		<TPAModal 
					onPress={ this.onModalButtonPress }
				/>
				<TPAText text={ terms }/>
        	</Modal>
			<KeyboardAvoidingView 
				style = {avoidingContainer}
				behavior= 'padding'
			>
				<View>
					<ScrollView>

			<Image
        	    style={ logo}
        	    source={ LOGO }
        	/>
				    <Text> { this.props.error.message} </Text>
				    <ActivityIndicator size="small" color="#00ff00" animating = {this.props.loading} />
				    <View style = {input}>
						<Input style = { input}
							placeholder = "Mobile number"
							keyboardType = "phone-pad"
						    onChangeText = { (number) => this.setState({ number}) }
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
						<Input style = { input}
						    placeholder = "Confirm Password"
						    autoCapitalize ={"none"}
						    secureTextEntry = {true }
						    onChangeText = { (confirmPassword) => this.setState({ confirmPassword}) }
						/>
				    </View>
					<View style = {input}>
						<Input style = { input}
							value = {name}
						    placeholder = "Name"
						    onChangeText = { (name) => this.setState({ name}) }
						/>
				    </View>
					<View style = {input}>
						<DatePicker
                			style={{
								backgroundColor:'white',
								height: 40,
								borderWidth: 1,
								borderRadius: 10,
								width: '100%'
							}}
                			date={ birthday }
                			mode="date"
                			format="MMM DD YYYY"
                			minDate="1950-01-01"
                			maxDate="2020-12-31"
                			confirmBtnText="Confirm"
							cancelBtnText="Cancel"
							placeholder="Birthday"
							androidMode="default"
                			customStyles={{
                    			dateIcon: {
									position: 'absolute',
									right: 0,
									top: 4,
									marginRight: 0
								},
                    			dateInput: {
									color: '#000',
									paddingRight: 5,
									paddingLeft: 5,
									lineHeight: 23,
									borderWidth: 0,
									position: 'absolute',
									left: 0,
								}
                			}}
                			onDateChange={ (date) => this.setState({ birthday: date }) }
            			/>
        			</View>
					<View style = {input}>
						<Input style = { input}
							value = {email}
						    placeholder = "Email"
						    autoCapitalize ={"none"}
						    keyboardType = "email-address"
						    onChangeText = { (email) => this.setState({ email}) }
						/>
				    </View>
					<View style = {input}>
						<Input style = { input}
							value = {city}
						    placeholder = "City"
						    onChangeText = { (city) => this.setState({ city}) }
						/>
				    </View>
					</ScrollView>
				    
				</View>
	    	</KeyboardAvoidingView>
			<View style = {input}>
				<Button 
				    title = "Submit"
				    onPress = { this.submit }
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
		height: deviceHeight*0.75,
        justifyContent: 'center', 
        alignItems: 'center', 
	},
    logo: {
        width: 50,
		height: 50,
		alignSelf: 'center',
		marginTop: deviceWidth*0.05
    },
    header: {
        textAlign: 'center',
        color: 'gray',
        fontSize: 24,
        marginBottom: 20
    },
    input: {
		paddingBottom: 10,
		width: deviceWidth*0.75,
		alignItems: 'center', 
	},
	modalStyle: {
		flex: 1,
		alignItems: 'center'
	}
};

const mapStateToProps = (state) => {
    return {
		email: state.auth,
		error: state.auth.error,
		loading: state.auth.loading,
		text: state.text,
    }
}

export default connect(mapStateToProps, {signUp})(SignupScreen);

import React, { Component } from 'react';
import { View, Text, Alert, ActivityIndicator, KeyboardAvoidingView, ScrollView } from 'react-native';
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

import { deviceWidth, deviceHeight } from '../../utils/dimensions';
import { userCreate } from '../../actions';
import validate from '../../validate';
import { ICON_LOCATION, ICON_NUMBER, ICON_NAME, ICON_GIFT } from '../../img';

class UserCreateScreen extends Component {
    state ={
	phone: null,
	phoneError: null,
	address: null,
	addressError: null,
	name: null,
	nameError: null,
	birthday: null,
	birthdayError: null,
	isModalVisible: false
    }

    backClick = () => {
	this.props.navigation.navigate('Home');
    }

    _toggleModal = () => {
	this.setState({ isModalVisible: !this.state.isModalVisible });
    }

    submit = () => {
	const { name, birthday, phone, address } = this.state;

	const nameError = validate('name', this.state.name);
	const phoneError = validate('phone', this.state.phone);
	const addressError = validate('address', this.state.address);
	const birthdayError = validate('birthday', this.state.birthday);

	this.setState({
	    nameError,
	    phoneError,
	    addressError,
	    birthdayError
	});

	if (!nameError && !phoneError && !addressError && !birthdayError) {
	    this.props.userCreate(name, birthday, phone, address);
	    this._toggleModal();
	}
    }

    onModalButtonPress = () => {
	this._toggleModal();
	if (!this.props.error) {
	    const resetAction = NavigationActions.reset({
		index: 0,
		actions: [
		    this.props.navigation.navigate('PostRegistration')
		] });
	    this.props.navigation.dispatch(resetAction);
	}
    }

    render() {
	const { login, terms } = this.props.text;
	const { modalStyle, container, avoidingContainer, input } = styles;
	const { phone, address, name, birthday, isModalVisible } = this.state;

	return (
	    <View style={container}>
		<Background
		    source={require('../../img/asset8.png')}
		/>
		<Modal isVisible={isModalVisible} style={modalStyle} >
		    <TPAModal 
			onPress={this.onModalButtonPress}
		    />
		    <TPAText text={terms} />
		</Modal>
		<KeyboardAvoidingView 
		    style={avoidingContainer}
		    behavior='padding'
		>
		    <View>
			<ScrollView contentContainerStyle={{ alignItems: 'center' }}>
			    <Logo />
			    <Text> { this.props.error.message} </Text>
			    <ActivityIndicator size='small' color='#00ff00' animating={this.props.loading} />
			    <View style={input}>
				<Input
				    value={name}
				    placeholder='Name'
				    onChangeText={(name) => this.setState({ name })}
				    src={ICON_NAME}
				    onBlur={() => {
					this.setState({
					   nameError: validate('name', this.state.name) 
					});
				    }}
				    error={this.state.nameError}
				/>
			    </View>
			    <View style={input}>
				<DatePicker
				    style={{
					backgroundColor: 'white',
					height: deviceHeight * 0.06,
					borderWidth: 1,
					borderRadius: 10,
					width: '100%',
					justifyContent: 'center'
				    }}
				    date={birthday}
				    mode='date'
				    format='MM/DD/YYYY'
				    minDate='01-01-1900'
				    maxDate='12-31-2020'
				    confirmBtnText='Confirm'
				    cancelBtnText='Cancel'
				    placeholder='Birthday'
					androidMode='spinner'
					iconSource={ICON_GIFT}
				    customStyles={{
					dateIcon: {
					    position: 'absolute',
					    right: deviceWidth * 0.025,
					    marginRight: 0
					},
					dateInput: {
					    color: '#000',
					    paddingLeft: deviceWidth * 0.025,
					    lineHeight: deviceHeight * 0.045,
					    borderWidth: 0,
					    position: 'absolute',
					    left: 0,
					},
					dateText: {
					    fontFamily: 'quicksand',
					    fontSize: deviceWidth * 0.04,
					},
					placeholderText: {
					    fontFamily: 'quicksand',
					    fontSize: deviceWidth * 0.04,
					    fontColor: 'gray'
					}
				    }}
				    onDateChange={(date) => this.setState({ birthday: date })}
				/>
			    </View>
			    <View style={input}>
				<Input
				    value={phone}
				    placeholder='Mobile number'
				    keyboardType='phone-pad'
				    onChangeText={(phone) => this.setState({ phone })}
				    src={ICON_NUMBER}
				    onBlur={() => {
					this.setState({
					   phoneError: validate('phone', this.state.phone) 
					});
				    }}
				    error={this.state.phoneError}
				/>
			    </View>
			    <View style={input}>
				<Input
				    value={address}
				    placeholder='City'
				    onChangeText={(address) => this.setState({ address })}
				    src={ICON_LOCATION}
				    onBlur={() => {
					this.setState({
					   addressError: validate('addressError', this.state.address) 
					});
				    }}
				    error={this.state.addressError}
				/>
			    </View>
			</ScrollView>

		    </View>
		</KeyboardAvoidingView>
		<View style={input}>
		    <Button 
			title='Submit'
			onPress={this.submit}
		    />
		</View>
	    </View>
	);
    }
}

const styles ={
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
    error: state.profile.error,
    loading: state.profile.loading,
    text: state.text,
});

export default connect(mapStateToProps, { userCreate })(UserCreateScreen);

import React, {Component } from 'react';
import PropTypes from 'prop-types';

import { StackNavigator, TabNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import LoadingScreen from './screens/LoadingScreen';
import LanguageScreen from './screens/LanguageScreen';
import GreetingsScreen from './screens/static/GreetingsScreen';
import LoginScreen from './screens/Auth/LoginScreen';
import NameScreen from './screens/Auth/NameScreen';
import BirthdayScreen from './screens/Auth/BirthdayScreen';
import PhoneScreen from './screens/Auth/PhoneScreen';
import EmailScreen from './screens/Auth/EmailScreen';
import SignupScreen from './screens/Auth/SignupScreen';
import AddressScreen from './screens/Auth/AddressScreen';
import PostRegistrationScreen from './screens/Auth/PostRegistrationScreen';
import EmergencyScreen from './screens/EmergencyScreen';
import ProfileScreen from './screens/static/ProfileScreen';
import AboutScreen from './screens/static/AboutScreen';
import SurveyScreen from './screens/SurveyScreen';
import CallScreen from './screens/CallScreen';
import CompressScreen from './screens/CompressScreen';
import CheckScreen from './screens/CheckScreen';
import SigninScreen from './screens/Auth/SigninScreen';
import UserInfoScreen from './screens/Auth/UserInfoScreen';

import { addListener } from '../src/utils/redux';


const RegistrationStack = StackNavigator(
    {
        Language: { screen: LanguageScreen },
        Greetings: { screen: GreetingsScreen },
        Login: { screen: LoginScreen },
	Signup: {screen: SignupScreen},
        Name: { screen: NameScreen,},
        Birthday: { screen: BirthdayScreen },
        Phone: { screen: PhoneScreen },
        Email: { screen: EmailScreen },
        Address: { screen: AddressScreen },
    },
    {
        headerMode: 'none'
    }
);

const CardiacArrestStack = StackNavigator(
    {
        Survey: { screen: SurveyScreen },
        Check: { screen: CheckScreen },
        Call: { screen: CallScreen },
        Compress: { screen: CompressScreen },
    },
    {
        headerMode: 'none'
    }
);

const DrowningStack = StackNavigator(
    {
        Survey: { screen: SurveyScreen },
        ConsciousCheck: { screen: SurveyScreen },
        PulseCheck: { screen: SurveyScreen },
        Call: { screen: CallScreen },
        Compress: { screen: CompressScreen },
        Airway: { screen: CompressScreen },
        Breathing: { screen: CompressScreen },
    },
    {
        headerMode: 'none'
    }
);

const HomeTab = TabNavigator(
    {
	Profile: { screen: ProfileScreen },
        Home: { screen: EmergencyScreen },
        About: { screen: AboutScreen }, 
    },
    {
        headerMode: 'none',
	tabBarOptions: {
	    inactiveTintColor: '#adadad',
	    activeTintColor: '#5F968E',
	    showIcon: true,
	    style: {
		backgroundColor: 'white',
	    }
	},
	tabBarPosition: "bottom",
    },
)

export const Router = StackNavigator(
    {
        Loading: { screen: LoadingScreen },
        Registration: { screen: RegistrationStack },
        PostRegistration: { screen: PostRegistrationScreen },  
        Home: { screen: HomeTab },
        CardiacArrest: { screen: CardiacArrestStack },
        Drowning: { screen: DrowningStack },
	Signin: {screen: SigninScreen},
	UserInfo: { screen: UserInfoScreen },
    },   
    {
        headerMode: 'none',
	
        transitionConfig: () => ({
            transitionSpec: {
                duration: 0,
            },
	}),
    }
);

class AppWithNavigationState extends Component {
    static propTypes = {
	dispatch: PropTypes.func.isRequired,
	nav: PropTypes.object.isRequired,
    };

    render() {
	const { dispatch, nav } = this.props;
	return (
	    <Router
		navigation={addNavigationHelpers({
		    dispatch,
		    state: nav,
		    addListener,
		})}
	    />
	);
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
})

export default connect(mapStateToProps)(AppWithNavigationState);

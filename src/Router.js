import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { StackNavigator, TabNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import LoadingScreen from './screens/LoadingScreen';
import LanguageScreen from './screens/LanguageScreen';
import GreetingsScreen from './screens/static/GreetingsScreen';
import LoginScreen from './screens/Auth/LoginScreen';
import SignupScreen from './screens/Auth/SignupScreen';
import UserCreateScreen from './screens/Auth/UserCreateScreen';
import SigninScreen from './screens/Auth/SigninScreen';
import UserInfoScreen from './screens/Auth/UserInfoScreen';
import PostRegistrationScreen from './screens/Auth/PostRegistrationScreen';
import EmergencyScreen from './screens/EmergencyScreen';
import ProfileScreen from './screens/static/ProfileScreen';
import PracticeScreen from './screens/static/PracticeScreen';

import SurveyScreen from './screens/handsonly/SurveyScreen';
import CheckScreen from './screens/handsonly/CheckScreen';
import CallScreen from './screens/handsonly/CallScreen';
import CompressScreen from './screens/handsonly/CompressScreen';
import AmbulanceScreen from './screens/AmbulanceScreen';

import ChildScreen from './screens/cpr/ChildScreen';
import DrowningScreen from './screens/cpr/DrowningScreen';
import CPRSurveyScreen from './screens/cpr/CPRSurveyScreen';
import CPRCallScreen from './screens/cpr/CPRCallScreen';
import ConsciousCheckScreen from './screens/cpr/ConsciousCheckScreen';
import AirCheckScreen from './screens/cpr/AirCheckScreen';
import PulseCheckScreen from './screens/cpr/PulseCheckScreen';
import BreathingScreen from './screens/cpr/BreathingScreen';
import CPRCompressScreen from './screens/cpr/CPRCompressScreen';

import InfantScreen from './screens/infant/InfantScreen';
import InfantSurveyScreen from './screens/infant/InfantSurveyScreen';
import InfantConsciousCheckScreen from './screens/infant/InfantConsciousCheckScreen';
import InfantAirCheckScreen from './screens/infant/InfantAirCheckScreen';
import InfantPulseCheckScreen from './screens/infant/InfantPulseCheckScreen';
import InfantCallScreen from './screens/infant/InfantCallScreen';
import InfantCompressScreen from './screens/infant/InfantCompressScreen';
import InfantBreathingScreen from './screens/infant/InfantBreathingScreen';

import { addListener } from '../src/utils/redux';
import { deviceHeight } from './utils/dimensions';


const RegistrationStack = StackNavigator(
    {
        Language: { screen: LanguageScreen },
        Greetings: { screen: GreetingsScreen },
        Login: { screen: LoginScreen },
        Signup: { screen: SignupScreen },
        UserCreate: { screen: UserCreateScreen },
    },
    {
        headerMode: 'none',
    }
);

const HomeTab = TabNavigator(
    {
        Profile: { screen: ProfileScreen },
        Main: { screen: EmergencyScreen },
        Practice: { screen: PracticeScreen }, 
    },
    {
        headerMode: 'none',
        tabBarPosition: 'bottom',
        swipeEnabled: true,
        lazy: false,
        initialRouteName: 'Main',
        tabBarOptions: {
            inactiveTintColor: '#adadad',
            activeTintColor: '#5F968E',
            showIcon: true,
            showLabel: false,
            style: {

                backgroundColor: 'white',
                height: deviceHeight * 0.08,
            },
            labelStyle: {
                fontSize: 10,
                fontFamily: 'robotoslab'
            }
        },
        
    },
);

// const HandsOnlyStack = StackNavigator(
//     {
//         Survey: { screen: SurveyScreen },
//         Check: { screen: CheckScreen },
//         Call: { screen: CallScreen },
//         Compress: { screen: CompressScreen },
//     },
//     {
//         headerMode: 'none'
//     }
// );

// const CPRStack = StackNavigator(
//     {
//         CPRSurvey: { screen: CPRSurveyScreen },
//         ConsciousCheck: { screen: ConsciousCheckScreen },
//         PulseCheck: { screen: PulseCheckScreen },
//         AirCheck: { screen: AirCheckScreen },
//         CPRCall: { screen: CPRCallScreen },
//         CPRCompress: { screen: CPRCompressScreen },
//         Breathing: { screen: BreathingScreen },
//     },
//     {
//         headerMode: 'none'
//     }
// );

// const InfantCPRStack = StackNavigator(
//     {
//         InfantSurvey: { screen: InfantSurveyScreen },
//         InfantConsciousCheck: { screen: InfantConsciousCheckScreen },
//         InfantPulseCheck: { screen: InfantPulseCheckScreen },
//         InfantAirCheck: { screen: InfantAirCheckScreen },
//         InfantCall: { screen: InfantCallScreen },
//         InfantCompress: { screen: InfantCompressScreen },
//         InfantBreathing: { screen: InfantBreathingScreen },
//     },
//     {
//         headerMode: 'none'
//     }
// );

export const Router = StackNavigator(
    {
        Loading: { screen: LoadingScreen },
        Registration: { screen: RegistrationStack },
        PostRegistration: { screen: PostRegistrationScreen },  
        Home: { screen: HomeTab },
        Signin: { screen: SigninScreen },
        UserInfo: { screen: UserInfoScreen },


        Infant: { screen: InfantScreen },
        Child: { screen: ChildScreen },
        Drowning: { screen: DrowningScreen },

        // InfantCPR: {screen: InfantCPRStack},
        InfantSurvey: { screen: InfantSurveyScreen },
        InfantConsciousCheck: { screen: InfantConsciousCheckScreen },
        InfantPulseCheck: { screen: InfantPulseCheckScreen },
        InfantAirCheck: { screen: InfantAirCheckScreen },
        InfantCall: { screen: InfantCallScreen },
        InfantCompress: { screen: InfantCompressScreen },
        InfantBreathing: { screen: InfantBreathingScreen },

        // CPR: {screen: CPRStack},
        CPRSurvey: { screen: CPRSurveyScreen },
        ConsciousCheck: { screen: ConsciousCheckScreen },
        PulseCheck: { screen: PulseCheckScreen },
        AirCheck: { screen: AirCheckScreen },
        CPRCall: { screen: CPRCallScreen },
        CPRCompress: { screen: CPRCompressScreen },
        Breathing: { screen: BreathingScreen },

        // HandsOnly: {screen: HandsOnlyStack},
        Survey: { screen: SurveyScreen },
        Check: { screen: CheckScreen },
        Call: { screen: CallScreen },
        Compress: { screen: CompressScreen },
        Ambulance: { screen: AmbulanceScreen },
    },   
    {
        stateName: 'MainAppNav',
        // initialRouteName: 'Infant',
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
});

export default connect(mapStateToProps)(AppWithNavigationState);

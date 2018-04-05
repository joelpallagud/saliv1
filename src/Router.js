import React, {Component } from 'react';
import PropTypes from 'prop-types';

import { StackNavigator, TabNavigator, addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import LoadingScreen from './screens/LoadingScreen';
import LanguageScreen from './screens/LanguageScreen';
import GreetingsScreen from './screens/static/GreetingsScreen';
import LoginScreen from './screens/Auth/LoginScreen';
import SignupScreen from './screens/Auth/SignupScreen';
import SigninScreen from './screens/Auth/SigninScreen';
import UserInfoScreen from './screens/Auth/UserInfoScreen';
import PostRegistrationScreen from './screens/Auth/PostRegistrationScreen';
import EmergencyScreen from './screens/EmergencyScreen';
import ProfileScreen from './screens/static/ProfileScreen';
import PracticeScreen from './screens/static/PracticeScreen';
import InfantScreen from './screens/InfantScreen';
import ChildScreen from './screens/ChildScreen';
import DrowningScreen from './screens/DrowningScreen';
import SurveyScreen from './screens/SurveyScreen';
import CPRSurveyScreen from './screens/CPRSurveyScreen';
import CPRCallScreen from './screens/CPRCallScreen';
import CPRCompressScreen from './screens/CPRCompressScreen';
import CallScreen from './screens/CallScreen';
import CompressScreen from './screens/CompressScreen';
import BreathingScreen from './screens/BreathingScreen';
import CheckScreen from './screens/CheckScreen';
import ConsciousCheckScreen from './screens/ConsciousCheckScreen';
import AirCheckScreen from './screens/AirCheckScreen';
import PulseCheckScreen from './screens/PulseCheckScreen';
import InfantSurveyScreen from './screens/InfantSurveyScreen';
import InfantConsciousCheckScreen from './screens/InfantConsciousCheckScreen';
import InfantAirCheckScreen from './screens/InfantAirCheckScreen';
import InfantPulseCheckScreen from './screens/InfantPulseCheckScreen';
import InfantCallScreen from './screens/InfantCallScreen';
import InfantCompressScreen from './screens/InfantCompressScreen';
import InfantBreathingScreen from './screens/InfantBreathingScreen';

import { addListener } from '../src/utils/redux';


const RegistrationStack = StackNavigator(
    {
        Language: { screen: LanguageScreen },
        Greetings: { screen: GreetingsScreen },
        Login: { screen: LoginScreen },
	    Signup: {screen: SignupScreen},
    },
    {
        headerMode: 'none'
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
        tabBarPosition: "bottom",
        swipeEnabled: true,
        lazy: false,
        initialRouteName: 'Main',
	    tabBarOptions: {
	        inactiveTintColor: '#adadad',
	        activeTintColor: '#5F968E',
            showIcon: true,
	        style: {
		        backgroundColor: 'white',
            }
        },
        
    },
)

const HandsOnlyStack = StackNavigator(
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

const CPRStack = StackNavigator(
    {
        CPRSurvey: { screen: CPRSurveyScreen },
        ConsciousCheck: { screen: ConsciousCheckScreen },
        PulseCheck: { screen: PulseCheckScreen },
        AirCheck: { screen: AirCheckScreen },
        CPRCall: { screen: CPRCallScreen },
        CPRCompress: { screen: CPRCompressScreen },
        Breathing: { screen: BreathingScreen },
    },
    {
        headerMode: 'none'
    }
);

const InfantCPRStack = StackNavigator(
    {
        InfantSurvey: { screen: InfantSurveyScreen },
        InfantConsciousCheck: { screen: InfantConsciousCheckScreen },
        InfantPulseCheck: { screen: InfantPulseCheckScreen },
        InfantAirCheck: { screen: InfantAirCheckScreen },
        InfantCall: { screen: InfantCallScreen },
        InfantCompress: { screen: InfantCompressScreen },
        InfantBreathing: { screen: InfantBreathingScreen },
    },
    {
        headerMode: 'none'
    }
);

export const Router = StackNavigator(
    {
        Loading: { screen: LoadingScreen },
        Registration: { screen: RegistrationStack },
        PostRegistration: { screen: PostRegistrationScreen },  
        Home: { screen: HomeTab },
	    Signin: {screen: SigninScreen},
        UserInfo: { screen: UserInfoScreen },
        Infant: {screen: InfantScreen},
        Child: {screen: ChildScreen},
        Drowning: {screen: DrowningScreen},

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
    },   
    {
        stateName: 'MainAppNav',
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

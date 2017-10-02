import { StackNavigator, TabNavigator } from 'react-navigation';
import LoadingScreen from './screens/LoadingScreen';
import LanguageScreen from './screens/LanguageScreen';
import GreetingsScreen from './screens/GreetingsScreen';
import LoginScreen from './screens/LoginScreen';
import NameScreen from './screens/NameScreen';
import BirthdayScreen from './screens/BirthdayScreen';
import PhoneScreen from './screens/PhoneScreen';
import EmailScreen from './screens/EmailScreen';
import AddressScreen from './screens/AddressScreen';
import PostRegistrationScreen from './screens/PostRegistrationScreen';
import EmergencyScreen from './screens/EmergencyScreen';
import ProfileScreen from './screens/ProfileScreen';
import AboutScreen from './screens/AboutScreen';
import SurveyScreen from './screens/SurveyScreen';
import CallScreen from './screens/CallScreen';
import CompressScreen from './screens/CompressScreen';


const RegistrationStack = StackNavigator(
    {
        Language: { screen: LanguageScreen },
        Greetings: { screen: GreetingsScreen },
        Login: { screen: LoginScreen },
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
        Emergency: { screen: EmergencyScreen },
        Profile: { screen: ProfileScreen },
        About: { screen: AboutScreen }, 
    },
    {
        headerMode: 'none'
    }
)

const Router = StackNavigator(
    {
        Loading: { screen: LoadingScreen },
        Registration: { screen: RegistrationStack },
        PostRegistration: { screen: PostRegistrationScreen },  
        Home: { screen: HomeTab },
        CardiacArrest: { screen: CardiacArrestStack },
        Drowning: { screen: DrowningStack },
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

export default Router;

import React, { Component } from 'react';
import { SafeAreaView, Platform } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { addNavigationHelpers } from 'react-navigation';
import { View } from 'react-native-animatable';
import ignoreWarnings from 'react-native-ignore-warnings';

import Router from './src/Router';
import reducers from './src/reducers';
import cacheAssetsAsync from './src/utils/cacheAssetsAsync';
import {
	ICON_CALL,
	ICON_EMERGENCY,
	ICON_FB,
	ICON_GIFT,
	ICON_LOCATION,
	ICON_EMAIL,
	ICON_NAME,
	ICON_NUMBER,
	ICON_NUMBER_ERROR,
	ICON_PASSWORD,
	ICON_PASSWORD_ERROR,
	ICON_PROFILE,
	CARD_CPR,
	LOGO,
	LOGO_NAME,
	LOGO_WHITE
} from './src/img';


const AppWithoutNav = ({ dispatch, nav }) => (
	<Router 
		navigation={
			addNavigationHelpers({
				dispatch,
				state: nav
			})
		}
	/>
    );

const mapStateToProps = (state) => ({
    nav: state.nav
});

const AppWithNav = connect(mapStateToProps)(AppWithoutNav);

export default class App extends Component {
	state = {
		appIsReady: false,
	};
	
	componentWillMount() {
		this.loadAssetsAsync();
		ignoreWarnings(['Setting a timer', 'Possible Unhandled Promise']);
	}
	
	async loadAssetsAsync() {
		try {
			await cacheAssetsAsync({
				images: [
					require('./src/img/asset2.png'),
					require('./src/img/asset3.png'),
					require('./src/img/asset4.png'),
					require('./src/img/asset5.png'),
					require('./src/img/asset6.png'),
					require('./src/img/asset7.png'),
					require('./src/img/asset8.png'),
					require('./src/img/asset9.png'),
					require('./src/img/asset10.png'),
					require('./src/img/asset13.png'),
					require('./src/img/asset14.png'),
					require('./src/img/asset15.png'),
					require('./src/img/asset16.png'),
					LOGO,
					LOGO_NAME,
					LOGO_WHITE,
					ICON_CALL,
					ICON_EMERGENCY,
					ICON_FB,
					ICON_GIFT,
					ICON_LOCATION,
					ICON_EMAIL,
					ICON_NAME,
					ICON_NUMBER,
					ICON_NUMBER_ERROR,
					ICON_PASSWORD,
					ICON_PASSWORD_ERROR,
					ICON_PROFILE,
					CARD_CPR
				],
				fonts: [
					{ comfortaa: require('./src/data/fonts/Comfortaa-Bold.ttf') },
					{ quicksand: require('./src/data/fonts/Quicksand-Regular.otf') },
					{ robotoslab: require('./src/data/fonts/RobotoSlab-Regular.ttf') },
				],
			});
		} catch (e) {
			console.warn(
				'There was an error caching assets (see: main.js), perhaps due to a ' +
				'network timeout, so we skipped caching. Reload the app to try again.'
			);
		console.log(e.message);
		} finally {
			this.setState({ appIsReady: true });
		}
	}
    /*
    componentDidMount() {
	this.authSubscription = firebase.auth().onAuthStateChanged((user) => {
	    this.setState({
		user,
	    });
	});
    }

    componentWillUnmount() {
	this.authSubscription();
    }
    */

    render() {
		const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

		if (this.state.appIsReady) {
			return (
				<Provider store={store}>
					<SafeAreaView style={{ flex: 1, backgroundColor: '#ddd' }}>
						<View style={{ flex: 1, backgroundColor: (Platform.OS === 'ios') ? '#ddd' : 'black', paddingTop: (Platform.OS === 'ios') ? 0 : 25 }}>
							<AppWithNav />
						</View>
					</SafeAreaView>
				</Provider>
			); 
		} 
			return null;
	}
}

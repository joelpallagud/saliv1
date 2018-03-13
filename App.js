import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { addNavigationHelpers } from 'react-navigation';
import Router from './src/Router';
import reducers from './src/reducers';
import firebase from './src/firebase';
import cacheAssetsAsync from './src/utils/cacheAssetsAsync';


const AppWithoutNav = ({ dispatch, nav }) => {
    return (
	<Router 
	    navigation={
		addNavigationHelpers({
		    dispatch,
		    state: nav
		})}
	    />
    )
};

const mapStateToProps = ( state ) => ({
    nav: state.nav
});

const AppWithNav = connect( mapStateToProps )( AppWithoutNav );

export default class App extends Component {
	state = {
		appIsReady: false,
	};
	
	componentWillMount() {
		this._loadAssetsAsync();
	}
	
	async _loadAssetsAsync() {
		try {
			await cacheAssetsAsync({
				fonts: [
					{ 'comfortaa': require('./src/data/fonts/Comfortaa-Bold.ttf') },
					{ 'quicksand': require('./src/data/fonts/Quicksand-Regular.otf') },
					{ 'robotoslab': require('./src/data/fonts/RobotoSlab-Regular.ttf') },
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
		const store = createStore( reducers, {}, applyMiddleware( reduxThunk ));

		if (this.state.appIsReady) {
			return (
				<Provider store={ store }>
					<SafeAreaView style={{ flex: 1,backgroundColor: '#ddd' }}>
						<AppWithNav />
					</SafeAreaView>
			  	</Provider>
			); 
		} else {
			return null;
		}
	}
};

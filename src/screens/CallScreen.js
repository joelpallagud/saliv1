import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import NumberList from '../components/NumberList';
import Controller from '../components/Controller';
import Overlay from '../components/Overlay';
//import { loadAudio } from '../helpers/audio';
import Geocoder from 'react-native-geocoder';
import { getCity } from '../helpers/geocoder';
import { Location, Permissions } from 'expo';


class CallScreen extends Component {
    backClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Check'})
            ]});
        this.props.navigation.dispatch(resetAction)
    }

    nextClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Compress'})
            ]});
        this.props.navigation.dispatch(resetAction)
    }

    playAudio = async () => {
	this.audio = new Expo.Audio.Sound();
	await this.audio.loadAsync(require("../data/audio/call.m4a"));
	await this.audio.playAsync();
	if(this.audio != null)
	{
	    this.audio.playAsync();
	}
	else
	{
	    console.log("Error playing audio");
	}

    }

    constructor(props)
    {
	super(props);
	this.state = {
	    location: null,
	    errorMessage: null,
	}
    }

    componentWillMount()
    {
	this._getLocationAsync();
    }

    componentWillUnmount()
    {
	this.audio.unloadAsync();
    }

    _getLocationAsync = async () => {
	let { status } = await Permissions.askAsync(Permissions.LOCATION);
	if (status !== 'granted') {
	    this.setState({
		errorMessage: 'Permission to access location was denied',
	    });
	}
	let pos = await Location.getCurrentPositionAsync({});
	let coords = { latitude: this.state.pos.coords.latitude,
		    longitude: this.state.pos.coords.longitude}
	let location = await Location.reverseGeocodeAsync(coords);
	this.setState({location});
    };

    render() {
	const { containerStyle, overlayStyle } = styles;
	const { call } = this.props.text;
	let text = 'Waiting..';
	if (this.state.errorMessage) {
	    text = this.state.errorMessage;
	} else if (this.state.city) 
	{
	    text = JSON.stringify(this.state.location[0].city);
	}

	return (
	    <View style={ containerStyle }>
		<Image
		    style={{
			backgroundColor: '#fff',
			flex: 1,
			resizeMode: 'cover',
			position: 'absolute',
			width: '100%',
			height: '100%',
			justifyContent: 'center',
		    }}
		    source={ require('../img/asset3.png') }
		>
		</Image>
		<Text> {text} </Text>
    		<View style={ overlayStyle } pointerEvents='none'>
		    {/*}<Overlay title = "Call for help" /> {*/}
		</View>
		<View style={{ flex: 80, paddingRight: 10, paddingLeft:10 }}>
		    <Text> { this.state.text } </Text>
		    <NumberList />
		</View>
		<View style={{ flex: 20 }}>
		    <Controller 
			backOnPress={ this.backClick }  
			nextOnPress={ this.nextClick } 
			question={ call }
		    />
		</View>
	    </View>
	)
    }
}

const styles = {
    containerStyle: {
	flex: 1,
	backgroundColor: 'white',
	marginTop: 20
    },
    overlayStyle: {
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	zIndex: 2
    }
}

const mapStateToProps = (state) => {
    const { text } = state;

    return { text };
}

export default connect( mapStateToProps )( CallScreen );


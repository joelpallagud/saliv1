import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import NumberList from '../components/NumberList';
import Background from '../components/Background';
import Controller from '../components/Controller';
import Overlay from '../components/Overlay';
//import { loadAudio } from '../helpers/audio';
// import Geocoder from 'react-native-geocoder';
// import { getCity } from '../helpers/geocoder';

class CPRCallScreen extends Component {
    backClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'AirCheck'})
            ]});
        this.props.navigation.dispatch(resetAction)
    }

    nextClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'CPRCompress'})
            ]});
        this.props.navigation.dispatch(resetAction)
    }

    // playAudio = async () => {
	// 	this.audio = new Expo.Audio.Sound();
	// 	await this.audio.loadAsync(require("../data/audio/call.m4a"));
	// 	await this.audio.playAsync();
	// 	if(this.audio != null) {
	// 		this.audio.playAsync();
	// 	}
	// 	else {
	// 	    console.log("Error playing audio");
	// 	}
    // }

    // constructor(props) {
	// 	super(props);
    // }

    // componentWillUnmount()
    // {
	// //this.audio.unloadAsync();
    // }


    render() {
	const { containerStyle, overlayStyle, videoStyle, controllerStyle } = styles;
	const { call } = this.props.text;

	return (
	    <View style={ containerStyle }>
			<Background
			    source={ require('../img/asset3.png') }
			/>
    		<View style={ overlayStyle } pointerEvents='none'>
			    {/*}<Overlay title = "Call for help" /> {*/}
			</View>
			<View style={ videoStyle }>
			    <NumberList />
			</View>
			<View style={ controllerStyle }>
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
		marginTop: (Platform.OS === 'ios') ? 20 : 0
	},
	controllerStyle: {
		flex: 30
	},
	overlayStyle: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		zIndex: 1
	},
	videoStyle: {
		flex: 70, 
		paddingRight: 10, 
		paddingLeft:10,
	}
}

const mapStateToProps = (state) => {
    const { text } = state;

    return { text };
}

export default connect( mapStateToProps )( CPRCallScreen );


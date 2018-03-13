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
		if(this.audio != null) {
			this.audio.playAsync();
		}
		else {
		    console.log("Error playing audio");
		}
    }

    constructor(props) {
		super(props);
    }

    componentWillUnmount()
    {
	//this.audio.unloadAsync();
    }


    render() {
	const { containerStyle, overlayStyle, backgroundStyle } = styles;
	const { call } = this.props.text;

	return (
	    <View style={ containerStyle }>
			<Image
			    style={backgroundStyle}
			    source={ require('../img/asset3.png') }
			>
			</Image>
    		<View style={ overlayStyle } pointerEvents='none'>
			    {/*}<Overlay title = "Call for help" /> {*/}
			</View>
			<View style={{ flex: 80, paddingRight: 10, paddingLeft:10 }}>
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
    },
    backgroundStyle: {
		backgroundColor: '#fff',
		flex: 1,
		resizeMode: 'cover',
		position: 'absolute',
		width: '100%',
		height: '100%',
		justifyContent: 'center',
    }
}

const mapStateToProps = (state) => {
    const { text } = state;

    return { text };
}

export default connect( mapStateToProps )( CallScreen );


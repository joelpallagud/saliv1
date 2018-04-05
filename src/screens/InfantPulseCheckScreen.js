import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import VideoScreen from '../components/VideoScreen';
import { COMPRESS_VID } from '../data';

class InfantPulseCheckScreen extends Component {
    backClick = () => {
	    const resetAction = NavigationActions.reset({
	        index: 0,
	        actions: [
	    	NavigationActions.navigate({ routeName: 'InfantConsciousCheck' })
	        ]
	    })	
            this.props.navigation.dispatch(resetAction)
    }

    nextClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'InfantAirCheck'})
            ]});
        this.props.navigation.dispatch(resetAction)
    }
    
    
    render() {
        const { check } = this.props.text;
        
        return (
            <VideoScreen 
                text={ check }
                backClick={ this.backClick }
                nextClick={ this.nextClick }
                video={ COMPRESS_VID }
                audio={ require("../data/audio/check.m4a") }
                title="Check for Pulse"
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
	    text: state.text,
    }
}

export default connect( mapStateToProps )( InfantPulseCheckScreen );

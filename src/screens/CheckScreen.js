import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import VideoScreen from '../components/VideoScreen';
import { COMPRESS_VID } from '../data';

class CheckScreen extends Component {
    backClick = () => {
	    const resetAction = NavigationActions.reset({
	        index: 0,
	        actions: [
	    	NavigationActions.navigate({ routeName: 'Survey' })
	        ]
	    })	
            this.props.navigation.dispatch(resetAction)
    }

    nextClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Call'})
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
                title="Check for Consciousness"
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
	    text: state.text,
	    subtitles: state.subtitles,
    }
}

export default connect( mapStateToProps )( CheckScreen );

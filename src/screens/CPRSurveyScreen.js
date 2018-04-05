import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import VideoScreen from '../components/VideoScreen';
import { SURVEY_VID } from '../data';

class CPRSurveyScreen extends Component {
    backClick = () => {
	    const resetAction = NavigationActions.reset({
	        index: 0,
	        key: null,
	        actions: [
	    	NavigationActions.navigate({ routeName: 'Home' })
	        ]
	    })	
        this.props.navigation.dispatch(resetAction)
    }

    nextClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'ConsciousCheck'})
            ]});
        this.props.navigation.dispatch(resetAction)
    }

    render() {
        const { survey } = this.props.text;

        return (
            <VideoScreen 
                text={ survey }
                backClick={ this.backClick }
                nextClick={ this.nextClick }
                video={ SURVEY_VID }
                audio={ require("../data/audio/survey.m4a") }
                title="Survey the Area"
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
	    text: state.text,
    }
}

export default connect( mapStateToProps )( CPRSurveyScreen );

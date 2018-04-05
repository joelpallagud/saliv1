import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import VideoScreen from '../components/VideoScreen';
import { COMPRESS_VID } from '../data';

class CPRCompressScreen extends Component {
    backClick = () => {
	    const resetAction = NavigationActions.reset({
	        index: 0,
	        actions: [
	    	NavigationActions.navigate({ routeName: 'CPRCall' })
	        ]
	    })	
            this.props.navigation.dispatch(resetAction)
    }

    nextClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Breathing'})
            ]});
        this.props.navigation.dispatch(resetAction)
    }
    
    
    render() {
        const { compress } = this.props.text;
        
        return (
            <VideoScreen 
                text={ compress }
                backClick={ this.backClick }
                nextClick={ this.nextClick }
                video={ COMPRESS_VID }
                audio={ require("../data/audio/compression.m4a") }
                title="Compress the Chest"
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
	    text: state.text,
    }
}

export default connect( mapStateToProps )( CPRCompressScreen );

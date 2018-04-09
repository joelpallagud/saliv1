import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import VideoScreen from '../../components/VideoScreen';
import { INFANT_CHECKPULSE_VID, INFANT_CHECKPULSE_AUDIO } from '../../data';

class InfantPulseCheckScreen extends Component {
    backClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ 
                    routeName: 'InfantConsciousCheck'
                })
            ]
        });
        this.props.navigation.dispatch(resetAction);
    }

    nextClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: 'InfantAirCheck'
                })
            ]
        });
        this.props.navigation.dispatch(resetAction);
    }
    
    
    render() {
        const { check } = this.props.text;
        
        return (
            <VideoScreen 
                text={check}
                backClick={this.backClick}
                nextClick={this.nextClick}
                video={INFANT_CHECKPULSE_VID}
                audio={INFANT_CHECKPULSE_AUDIO}
                title="Check for Pulse"
            />
        );
    }
}

const mapStateToProps = (state) => ({
    text: state.text,
});

export default connect(mapStateToProps)(InfantPulseCheckScreen);

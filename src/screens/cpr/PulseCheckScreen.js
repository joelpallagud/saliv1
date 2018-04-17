import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import VideoScreen from '../../components/VideoScreen';
import { CHECKPULSE_VID, CHECKPULSE_AUDIO } from '../../data';

class PulseCheckScreen extends Component {
    backClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: 'AirCheck',
                    params: {
                        noPulse: true
                    }
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
                    routeName: 'AirCheck',
                    params: {
                        noPulse: false
                    }
                })
            ]
        });
        this.props.navigation.dispatch(resetAction);
    }
    
    
    render() {
        const { pulseCheck } = this.props.text;
        
        return (
            <VideoScreen 
                text={pulseCheck}
                backClick={this.backClick}
                nextClick={this.nextClick}
                video={CHECKPULSE_VID}
                audio={CHECKPULSE_AUDIO}
                title="Check for Pulse"
            />
        );
    }
}

const mapStateToProps = (state) => ({
    text: state.text,
});

export default connect(mapStateToProps)(PulseCheckScreen);

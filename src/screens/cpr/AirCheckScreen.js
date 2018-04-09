import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import VideoScreen from '../../components/VideoScreen';
import { CHECKBREATH_VID, CHECKBREATH_AUDIO } from '../../data';

class AirCheckScreen extends Component {
    backClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: 'PulseCheck'
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
                    routeName: 'CPRCall',
                    params: { isNotSafe: false } 
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
                video={CHECKBREATH_VID}
                audio={CHECKBREATH_AUDIO}
                title="Check for Breathing"
            />
        );
    }
}

const mapStateToProps = (state) => ({
    text: state.text,
});

export default connect(mapStateToProps)(AirCheckScreen);

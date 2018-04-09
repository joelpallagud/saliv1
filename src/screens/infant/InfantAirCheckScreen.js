import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import VideoScreen from '../../components/VideoScreen';
import { INFANT_CHECKBREATH_VID, INFANT_CHECKBREATH_AUDIO } from '../../data';

class InfantAirCheckScreen extends Component {
    backClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            key: null,
            actions: [
                NavigationActions.navigate({ routeName: 'InfantPulseCheck' })
            ]
        });	
        this.props.navigation.dispatch(resetAction);
    }

    nextClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: 'InfantCall',
                    params: { isNotSafe: false }
                })
            ] 
        });
        this.props.navigation.dispatch(resetAction);
    }

    render() {
        const { survey } = this.props.text;

        return (
            <VideoScreen 
                text={survey}
                backClick={this.backClick}
                nextClick={this.nextClick}
                video={INFANT_CHECKBREATH_VID}
                audio={INFANT_CHECKBREATH_AUDIO}
                title="Check for Breathing"
            />
        );
    }
}

const mapStateToProps = (state) => ({
        text: state.text,
    });

export default connect(mapStateToProps)(InfantAirCheckScreen);

import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import VideoScreen from '../../components/VideoScreen';
import { INFANT_CHECKBREATH_VID, INFANT_CHECKBREATH_AUDIO } from '../../data';

class InfantAirCheckScreen extends Component {
    resetNavigate = (route, noParams, params) => {
        if (noParams) {
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({
                        routeName: route,
                        params
                    })
                ]
            });
            this.props.navigation.dispatch(resetAction);
        } else {
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({
                        routeName: route
                    })
                ]
            });
            this.props.navigation.dispatch(resetAction);
        }
    }

    backClick = () => {
        const { params } = this.props.navigation.state;

        if (params.noPulse) {
            this.resetNavigate(
                'InfantCompress',
                true,
                { index: 1, noBreath: true, noPulse: true }
            );
        } else {
            this.resetNavigate(
                'InfantBreathing',
                true,
                { noBreath: true, noPulse: false }
            );
        }
    }

    nextClick = () => {
        const { params } = this.props.navigation.state;

        if (params.noPulse) {
            this.resetNavigate(
                'InfantCompress',
                true,
                { noBreath: false, noPulse: true }
            );
        } else {
            this.resetNavigate('Ambulance');
        }
    }

    render() {
        const { airCheck } = this.props.text;

        return (
            <VideoScreen 
                text={airCheck}
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

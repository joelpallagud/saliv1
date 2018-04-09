import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import VideoScreen from '../../components/VideoScreen';
import { INFANT_BREATH_VID, INFANT_BREATH_AUDIO } from '../../data';

class InfantBreathingScreen extends Component {
    backClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            key: null,
            actions: [
                NavigationActions.navigate({
                    routeName: 'InfantCompress' 
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
                    routeName: 'Home',
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
                video={INFANT_BREATH_VID}
                audio={INFANT_BREATH_AUDIO}
                title="Mouth to Mouth Resuscitation"
            />
        );
    }
}

const mapStateToProps = (state) => ({
        text: state.text,
    });

export default connect(mapStateToProps)(InfantBreathingScreen);

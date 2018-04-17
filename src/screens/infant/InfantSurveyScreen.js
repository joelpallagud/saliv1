import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import VideoScreen from '../../components/VideoScreen';
import { SURVEY_VID, SURVEY_AUDIO } from '../../data';

class InfantSurveyScreen extends Component {
    backClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            key: null,
            actions: [
                NavigationActions.navigate({
                    routeName: 'InfantCall',
                    params: { isNotSafe: true } 
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
                    routeName: 'InfantConsciousCheck',
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
                video={SURVEY_VID}
                audio={SURVEY_AUDIO}
                title="Survey the Area"
            />
        );
    }
}

const mapStateToProps = (state) => ({
    text: state.text,
});

export default connect(mapStateToProps)(InfantSurveyScreen);

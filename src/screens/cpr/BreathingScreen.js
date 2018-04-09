import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import VideoScreen from '../../components/VideoScreen';
import { BREATH_VID, BREATH_AUDIO } from '../../data';

class BreathingScreen extends Component {
    backClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: 'CPRCompress'
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
                    routeName: 'Home'
                })
            ]
        });
        this.props.navigation.dispatch(resetAction);
    }
    
    
    render() {
        const { compress } = this.props.text;
        
        return (
            <VideoScreen 
                text={compress}
                backClick={this.backClick}
                nextClick={this.nextClick}
                video={BREATH_VID}
                audio={BREATH_AUDIO}
                title="Mouth to Mouth Resuscitation"
            />
        );
    }
}

const mapStateToProps = (state) => ({
    text: state.text,
});

export default connect(mapStateToProps)(BreathingScreen);

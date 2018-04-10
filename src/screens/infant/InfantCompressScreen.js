import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import VideoScreen from '../../components/VideoScreen';
import { INFANT_COMPRESS_VID, INFANT_COMPRESS_AUDIO } from '../../data';

class InfantCompressScreen extends Component {
    backClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: 'InfantCall'
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
                    routeName: 'InfantBreathing'
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
                video={INFANT_COMPRESS_VID}
                audio={INFANT_COMPRESS_AUDIO}
                title="Compress the Chest"
            />
        );
    }
}

const mapStateToProps = (state) => ({
    text: state.text,
});

export default connect(mapStateToProps)(InfantCompressScreen);

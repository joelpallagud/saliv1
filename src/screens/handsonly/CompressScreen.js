import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import VideoScreen from '../../components/VideoScreen';
import { COMPRESS_VID, COMPRESS_AUDIO } from '../../data';

class CompressScreen extends Component {
    backClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: 'Call' 
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
                video={COMPRESS_VID}
                audio={COMPRESS_AUDIO}
                title="Compress the Chest"
            />
        );
    }
}

const mapStateToProps = (state) => ({
    text: state.text,
});

export default connect(mapStateToProps)(CompressScreen);

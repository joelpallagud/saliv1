import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import VideoScreen from '../../components/VideoScreen';
import { COMPRESS_VID, COMPRESS_AUDIO } from '../../data';

class CompressScreen extends Component {
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
        this.resetNavigate('CPRCall');
    }

    nextClick = () => {
        const { params } = this.props.navigation.state;
        const { noBreath, noPulse } = params;

        if (noBreath) {
            this.resetNavigate('Breathing', true, { index: params.index, noBreath, noPulse });
        } else {
            this.resetNavigate('Ambulance');
        }
    }
    
    
    render() {
        const { compress, CPRcompress } = this.props.text;
        const { noBreath } = this.props.navigation.state.params;
        
        return (
            <VideoScreen 
                text={(noBreath) ? CPRcompress : compress}
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

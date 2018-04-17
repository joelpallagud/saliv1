import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import VideoScreen from '../../components/VideoScreen';
import { BREATH_VID, BREATH_AUDIO } from '../../data';

class BreathingScreen extends Component {
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
        this.resetNavigate('Home');
    }

    nextClick = () => {
        const { params } = this.props.navigation.state;
        const { noPulse, noBreath } = params;
        
        if (params.index === 5) {
            this.resetNavigate('PulseCheck');
        } else if (noPulse) {
            this.resetNavigate(
                'CPRCompress',
                true,
                { index: params.index + 1, noPulse, noBreath }
            );
        } else {
            this.resetNavigate('Ambulance');
        }
    }

    render() {
        const { breathing, justBreathing } = this.props.text;
        const { noPulse } = this.props.navigation.state.params;

        return (
            <VideoScreen 
                text={(noPulse) ? breathing : justBreathing}
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


// import React, { Component } from 'react';
// import { NavigationActions } from 'react-navigation';
// import { connect } from 'react-redux';
// import VideoScreen from '../../components/VideoScreen';
// import { BREATH_VID, BREATH_AUDIO } from '../../data';

// class BreathingScreen extends Component {
//     backClick = () => {
//         const resetAction = NavigationActions.reset({
//             index: 0,
//             actions: [
//                 NavigationActions.navigate({
//                     routeName: 'CPRCompress'
//                 })
//             ]
//         });	
//             this.props.navigation.dispatch(resetAction);
//     }

//     nextClick = () => {
//         const { params } = this.props.navigation.state;
        
//         if (params.index === 5) {
//             const resetAction = NavigationActions.reset({
//                 index: 0,
//                 actions: [
//                     NavigationActions.navigate({
//                         routeName: 'PulseCheck'
//                     })
//                 ]
//             });
//             this.props.navigation.dispatch(resetAction);
//         } else {
//             const resetAction = NavigationActions.reset({
//                 index: 0,
//                 actions: [
//                     NavigationActions.navigate({
//                         routeName: 'CPRCompress',
//                         params: {
//                             index: params.index + 1
//                         }
//                     })
//                 ]
//             });
//             this.props.navigation.dispatch(resetAction);
//         }
//     }
    
    
//     render() {
//         const { breathing } = this.props.text;
        
//         return (
//             <VideoScreen 
//                 text={breathing}
//                 backClick={this.backClick}
//                 nextClick={this.nextClick}
//                 video={BREATH_VID}
//                 audio={BREATH_AUDIO}
//                 title="Mouth to Mouth Resuscitation"
//             />
//         );
//     }
// }

// const mapStateToProps = (state) => ({
//     text: state.text,
// });

// export default connect(mapStateToProps)(BreathingScreen);

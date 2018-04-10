import React, { Component } from 'react'; 
import { View } from 'react-native'; 
import { Audio } from 'expo';
import Background from './Background';
import Controller from './Controller';
import Overlay from './Overlay';
import Video from './Video';

// import Subtitle from './Subtitle';
// import { loadAudio } from '../helpers/audio';
// import { showSubtitles } from '../actions';

class VideoScreen extends Component {
    state = {
        // subtitles: null,
        isLoaded: false
    }

    componentWillMount() {
        // this._getSubtitles();
    }

    componentDidMount() {
        this.playAudio();
    }

    // _getSubtitles = async () => {
    //     await this.props.showSubtitles('Survey', 'English');
    //     this.setState({
    //         isLoaded: true,
    //     })
    // }

    componentWillUnmount() {
        clearInterval(this.interval);
        this.audio.unloadAsync();
    } 

    playAudio = async () => {
        const { audio } = this.props;

        this.audio = new Audio.Sound();
        await this.audio.loadAsync(audio);
        await this.audio.playAsync();
        if (this.audio != null) {
            this.audio.playAsync();
        } else {
            console.log('Error playing audio');
        }
    }


    render() {
        const {
            video,
            backClick,
            nextClick,
            text,
            // subtitles,
            title }
        = this.props;
        const {
            containerStyle,
            controllerStyle,
            overlayStyle,
            // subtitleStyle,
            videoStyle
        } = styles;

        console.log('IM PLAYING');

        return (
            <View style={containerStyle}>
                <Background
                    source={require('../img/asset3.png')}
                />
                <View style={overlayStyle} pointerEvents='none'>
                    {/* { this.state.isLoaded && */}
                        <Overlay 
                            title={title} 
                            // subtitles = {this.props.subtitles.survey.overlay} 
                        />
                    {/* } */}
                </View>
                <View style={videoStyle}>
                    <Video 
                        source={video}
                    />
                    {/* <View style={ subtitleStyle }>
                        { this.state.isLoaded &&
                            <Subtitle subtitles= { subtitles } />
                        }
                    </View> */}
                </View>
                    
                <View style={controllerStyle}>
                    <Controller 
                        backOnPress={backClick}  
                        nextOnPress={nextClick} 
                        question={text}
                    />
                </View>
            </View>
            );
        }
    }

    const styles = {
        containerStyle: {
            flex: 1,
            // marginTop: (Platform.OS === 'android') ? 25 : 0
        },
        controllerStyle: {
            flex: 30
        },
        overlayStyle: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1
        },
        subtitleStyle: {
            height: '15%',
        },
        videoStyle: {
            flex: 70, 
            justifyContent: 'flex-end',
        }
    };

export default VideoScreen;

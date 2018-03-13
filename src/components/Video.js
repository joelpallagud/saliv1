import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Alert } from 'react-native';
import {Video} from 'expo';

class VideoComponent extends Component {
    state = { isVideoPaused: true, isVideoMuted: false};

    playVideo = () => {
        this.setState({ isVideoPaused: false })
    }
    pauseVideo = () => {
        this.setState({ isVideoPaused: true })
    }

    videoError = () => {
	Alert.alert(
	    'Video playback error',
	    'There was an error playing the video',
	    [
		{text: 'Ok', style: 'default'}
	    ]
	)
	console.log("Error loading video")
    }
    componentDidMount() {
        this.timeout = setTimeout(this.playVideo, 3000);
        
    }
    componentWillUnmount() {
        this.pauseVideo
	clearTimeout(this.timeout)
    }


    render() {
        const { containerStyle, videoStyle } = styles;
        
        return (
		    <Video
			    source={ this.props.source }
			    volume={1.0 }
			    resizeMode= {'cover'}
			    style={ videoStyle }
			    isLooping
			    isMuted
			    shouldPlay
			    onError = { this.videoError }
			    onLoadStart={(el)=>console.log("video is being loaded",el)}
			    onLoad={(el)=>console.log("video is loaded",el)}
			/>
        )
    }
}

const styles = {
    containerStyle : {
        backgroundColor: 'red',
    },
    videoStyle: {
		position: 'absolute',
		top:0,
		right:0,
		bottom:0,
		left:0,
    }
}

export default VideoComponent;

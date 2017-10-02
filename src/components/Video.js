import React, { Component } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import Video from 'react-native-video';

class VideoComponent extends Component {
    state = { isVideoPaused: true };

    playVideo = () => {
        this.setState({ isVideoPaused: !this.state.isVideoPaused })
    }

    componentDidMount() {
        setTimeout(this.playVideo, 5000);
        
    }
    componentWillUnmount() {
        this.playVideo
    }

    render() {
        const { containerStyle, videoStyle } = styles;
        
        return (
            <View style={ containerStyle }>
                <Video
                        source={ this.props.source }
                        rate={ 1.0 }
                        volume={ 1.0 }
                        resizeMode='cover'
                        style={ videoStyle }
                        repeat
                        muted
                        paused={ this.state.isVideoPaused }
                    />
            </View>
        )
    }
}

const styles = {
    containerStyle : {
        flex: 1,
        backgroundColor: 'red',
    },
    videoStyle: {
        flex: 1
    }
}

export default VideoComponent;

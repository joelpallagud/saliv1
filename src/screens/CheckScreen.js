import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import Video from '../components/Video';
import Controller from '../components/Controller';
import Overlay from '../components/Overlay';
import Subtitle from "../components/Subtitle";
import { COMPRESS_VID } from '../data';
import { CheckBox } from 'react-native-elements';
import { showSubtitles } from '../actions';
//import { loadAudio } from '../helpers/audio';

class CheckScreen extends Component {
    constructor(props){
	    super(props);
	    this.state= {
	        isLoaded: false,
	    }
    }
    backClick = () => {
	    const resetAction = NavigationActions.reset({
	        index: 0,
	        actions: [
	    	NavigationActions.navigate({ routeName: 'Survey' })
	        ]
	    })	
            this.props.navigation.dispatch(resetAction)
    }

    nextClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Call'})
            ]});
        this.props.navigation.dispatch(resetAction)
    }
    
    playAudio = async () => {
	    this.audio = new Expo.Audio.Sound();
	    await this.audio.loadAsync(require("../data/audio/check.m4a"));
	    await this.audio.playAsync();
	    if(this.audio != null) {
	        this.audio.playAsync();
	    } else {
	        console.log("Error playing audio");
	    }
    }

    componentDidMount() {
	    this.playAudio()
    }

    componentWillMount() {
	    this._getSubtitles();
    }

    componentWillUnmount() {
	    this.audio.unloadAsync();
    }   

    _getSubtitles = async () => {
	    await this.props.showSubtitles('Check', 'English');
	    console.log(this.props.subtitles);
	    this.setState({
	        isLoaded: true,
	    })
    }

    render() {
        const { containerStyle, overlayStyle, videoStyle, subtitleStyle, controllerStyle } = styles;
        const { check } = this.props.text;

        return (
            <View style={ containerStyle }>
		        <Image
		            style={{
		              backgroundColor: '#fff',
		              flex: 1,
		              resizeMode: 'cover',
		              position: 'absolute',
		              width: '100%',
		              height: '100%',
		              justifyContent: 'center',
		            }}
		            source={ require('../img/asset3.png') }
		          >
		        </Image>
                <View style={ overlayStyle } pointerEvents='none'>
		            { this.state.isLoaded &&
                        <Overlay 
                            title='Check the victim' 
                            subtitles= {this.props.subtitles.check.overlay} 
                        />
		            }
                </View>
                <View style={ videoStyle }>
                    <Video 
                        source={ COMPRESS_VID }
                    />
                </View>
		        <View style={ subtitleStyle }>
                    { this.state.isLoaded &&
                        <Subtitle 
                            subtitles= {this.props.subtitles.check.repeat} 
                        />
		            }
		        </View>
                <View style={ controllerStyle }>
                    <Controller 
                        backOnPress={ this.backClick }  
                        nextOnPress={ this.nextClick } 
                        question={ check }
                    />
                </View>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 20
    },
    overlayStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1
    },
    videoStyle: { 
        flex: 80, 
        paddingRight: 10, 
        paddingLeft:10 
    },
    subtitleStyle: {
        flex:10
    },
    controllerStyle: {
        flex: 20
    }
}

const mapStateToProps = (state) => {
    return {
	    text: state,
	    subtitles: state.subtitles,
    }
}

export default connect( mapStateToProps, {showSubtitles} )( CheckScreen );

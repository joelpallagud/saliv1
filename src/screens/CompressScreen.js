import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import Video from '../components/Video';
import Controller from '../components/Controller';
import Overlay from '../components/Overlay';
import { COMPRESS_VID } from '../data';
//import { loadAudio } from '../helpers/audio'
import { showSubtitles } from '../actions';
import Subtitle from "../components/Subtitle";

class CompressScreen extends Component {
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
                NavigationActions.navigate({ routeName: 'Call'})
            ]});
        this.props.navigation.dispatch(resetAction)
    }

    nextClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                this.props.navigation.navigate('Home')
            ]});
        this.props.navigation.dispatch(resetAction)
    }

    playAudio = async () => {
	    this.audio = new Expo.Audio.Sound();
	    await this.audio.loadAsync(require("../data/audio/compression.m4a"));
	    await this.audio.playAsync();
	    if(this.audio != null) {
	        this.audio.playAsync();
	    }
	    else {
	        console.log("Error playing audio");
	    }
    }

    _getSubtitles = async () => {
	    await this.props.showSubtitles('Compress', 'English');
	    console.log(this.props.subtitles.compressions.overlay);
	    this.setState({
	        isLoaded: true,
	    })
    }
    
    componentDidMount() {
	    this.playAudio()
    }

    componentWillUnmount() {
	    this.audio.unloadAsync();
    }

    componentWillMount() {
	    this._getSubtitles();
    }

    render() {
        const { containerStyle, overlayStyle } = styles;
        const { compress } = this.props.text;

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
		    <Overlay title='Compress the Chest' subtitles= {this.props.subtitles.compressions.overlay}  />
                </View>
                <View style={{ flex: 80, paddingRight: 10, paddingLeft:10 }}>
                    <Video 
                        source={ COMPRESS_VID }
                    />
                </View>
		<View style = {{flex:10}}>

		    { this.state.isLoaded &&
		    <Subtitle subtitles= {this.props.subtitles.compressions.repeat}></Subtitle>
		    }
		</View>
                <View style={{ flex: 20 }}>
                    <Controller 
                        backOnPress={ this.backClick }  
                        nextOnPress={ this.nextClick } 
                        question={ compress }
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
    }
}

const mapStateToProps = (state) => {
    return {
	text: state,
	subtitles: state.subtitles,
    }
}

export default connect( mapStateToProps , {showSubtitles})( CompressScreen );


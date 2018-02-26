import React, { Component } from 'react'; import { View, Text, TouchableWithoutFeedback, Image, StyleSheet } from 'react-native'; import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import Video from '../components/Video';
import Controller from '../components/Controller';
import Overlay from '../components/Overlay';
import { SURVEY_VID } from '../data';
import { loadAudio} from '../helpers/audio';
import Subtitle from "../components/Subtitle";
import { Audio } from 'expo';
import { showSubtitles } from '../actions';

class SurveyScreen extends Component {
    backClick = () => {
	const resetAction = NavigationActions.reset({
	    index: 0,
	    key: null,
	    actions: [
		NavigationActions.navigate({ routeName: 'Home' })
	    ]
	})	
        this.props.navigation.dispatch(resetAction)
    }

    nextClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Check'})
            ]});
        this.props.navigation.dispatch(resetAction)
    }
    
    playAudio = async () => {
	this.audio = new Expo.Audio.Sound();
	await this.audio.loadAsync(require("../data/audio/survey.m4a"));
	await this.audio.playAsync();
	if(this.audio != null)
	{
	    this.audio.playAsync();
	}
	else
	{
	    console.log("Error playing audio");
	}

    }

    componentDidMount()
    {
	this.playAudio()
    }

    componentWillMount()
    {
	this.props.showSubtitles("Survey", "English");
	console.log(this.props.subtitles)
    }

    componentWillUnmount()
    {
	clearInterval(this.interval);
	this.audio.unloadAsync();
    } 

    render() {
        const { survey } = this.props.text;

        return (
            <View style={styles.container}>
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
                <View style={styles.overlay} pointerEvents='none'>
		    {/*}
		    <Overlay title='Survey the Area' subtitles = {this.props.subtitles.overlay} />
		    {*/}
                </View>
                <View style={{ flex: 80, paddingRight: 10, paddingLeft:10 }}>
                    <Video 
                        source={ SURVEY_VID }
                    />
                </View>
		<View style = {{flex:10}}>
		    {/*}
		    <Subtitle subtitles= {this.props.subtitles.repeat}></Subtitle>
		    {*/}
		</View>
                <View style={{ flex: 20 }}>
                    <Controller 
                        backOnPress={ this.backClick }  
                        nextOnPress={ this.nextClick } 
                        question={ survey }
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 20
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 1
    }
})

const mapStateToProps = (state) => {
    return {
	text: state,
	subtitles: state.subtitles,
    }
}

export default connect( mapStateToProps, {showSubtitles} )( SurveyScreen );

import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import Video from '../components/Video';
import Controller from '../components/Controller';
import Overlay from '../components/Overlay';
import { CHECK_VID } from '../data';
import { CheckBox } from 'react-native-elements';
//import { loadAudio } from '../helpers/audio';

class CheckScreen extends Component {
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

    componentWillUnmount()
    {
	this.audio.unloadAsync();
    }   

    render() {
        const { containerStyle, overlayStyle } = styles;
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
		    {/*}
                    <Overlay title='Check the victim' subtitles= {["TEst", "test"]} length= {[1000, 1000]} />
		    {*/}
                </View>
                <View style={{ flex: 80, paddingRight: 10, paddingLeft:10 }}>
                    <Video 
                        source={ CHECK_VID }
                    />
                </View>
                <View style={{ flex: 20 }}>
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
    }
}

const mapStateToProps = (state) => {
    const { text } = state;

    return { text };
}

export default connect( mapStateToProps )( CheckScreen );

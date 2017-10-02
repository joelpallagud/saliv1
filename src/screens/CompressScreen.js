import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { NavigationActions } from 'react-navigation';
import Video from '../components/Video';
import Controller from '../components/Controller';
import Overlay from '../components/Overlay';
import { COMPRESS_VID } from '../data';

class CompressScreen extends Component {
    backClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Call'})
            ]});
        this.props.navigation.dispatch(resetAction)
    }

    nextClick = () => {
        this.props.navigation.navigate('Home')
    }

    render() {
        const { containerStyle, overlayStyle } = styles;

        return (
            <View style={ containerStyle }>
                <View style={ overlayStyle } pointerEvents='none'>
                    <Overlay title='Compress the Chest' />
                </View>
                <View style={{ flex: 80 }}>
                    <Video 
                        source={ COMPRESS_VID }
                    />
                </View>
                <View style={{ flex: 20 }}>
                    <Controller backOnPress={ this.backClick }  nextOnPress={ this.nextClick } />
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

export default CompressScreen;

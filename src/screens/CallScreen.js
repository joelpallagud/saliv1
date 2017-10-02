import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { NavigationActions } from 'react-navigation';
import NumberList from '../components/NumberList';
import Controller from '../components/Controller';
import Overlay from '../components/Overlay';

class CallScreen extends Component {
    backClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Survey'})
            ]});
        this.props.navigation.dispatch(resetAction)
    }

    nextClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Compress'})
            ]});
        this.props.navigation.dispatch(resetAction)
    }

    render() {
        const { containerStyle, overlayStyle } = styles;

        return (
            <View style={ containerStyle }>
                <View style={ overlayStyle } pointerEvents='none'>
                    <Overlay title='Call for Help' />
                </View>
                <View style={{ flex: 80 }}>
                    <NumberList />
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

export default CallScreen;

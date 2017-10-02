import React, { Component } from 'react';
import { ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Button from '../components/Button';
import Card from '../components/Card';
import { LOGO } from '../img';


class EmergencyScreen extends Component {
    handleClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'CardiacArrest'})
            ]});
        this.props.navigation.dispatch(resetAction)
    }
    render() {
        const { emergencyHeader } = this.props.text;

        return (
            <ScrollView style={ styles.containerStyle }>
                <Text style={ styles.headerStyle } >
                    { emergencyHeader }
                </Text>
                <Card onPress={ this.handleClick } title='Sudden Cardiac Arrest'/>
                <Card onPress={ this.handleClick } title='Drowning'/>
            </ScrollView>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1, 
        backgroundColor: 'white',
        paddingTop: 20
    },
    headerStyle: {
        textAlign: 'center',
        color: 'gray',
        fontSize: 24
    }
}
const mapStateToProps = (state) => {
    const { text } = state;
    
    return { text };
}
export default connect(mapStateToProps)(EmergencyScreen);

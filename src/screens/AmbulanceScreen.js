import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';

import Button from '../components/Button';
import HeaderText from '../components/HeaderText';
import Logo from '../components/Logo';


class AmbulanceScreen extends Component {
    nextClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: 'Home',
                    params: {
                        isNotSafe: false
                    }
                })
            ]
        });
        this.props.navigation.dispatch(resetAction);
    }

    render() {
        const { containerStyle } = styles;
        const { ambulanceHeader, practiceButton } = this.props.text;

        return (
            <View style={containerStyle}>
                <Logo />
                <HeaderText text={ambulanceHeader} />
                <Button 
                    title={practiceButton} 
                    onPress={this.nextClick}
                />
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        alignItems: 'center', 
        backgroundColor: 'white',
        justifyContent: 'space-around'
    },
    headerStyle: {
        justifyContent: 'space-around'
    }
};

const mapStateToProps = (state) => {
    const { text } = state;

    return { text };
};

export default connect(mapStateToProps)(AmbulanceScreen);

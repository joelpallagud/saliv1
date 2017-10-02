import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation'
import Button from '../components/Button';
import { LOGO } from '../img';


class PostRegistrationScreen extends Component {
    handleClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'Home'})
            ]});
        this.props.navigation.dispatch(resetAction);
    }

    render() {
        const { postReg, postRegButton } = this.props.text;

        return (
            <View style={ styles.containerStyle } >
                <Image
                    style={ styles.logoStyle }
                    source={ LOGO }
                />
                <View>
                    <Text style={ styles.headerStyle } >
                        { postReg }
                    </Text>
                    <Button 
                        title={ postRegButton }
                        onPress={ this.handleClick }
                    />
                </View>
            </View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'white'
    },
    logoStyle: {
        width: 50,
        height: 50,
        position: 'absolute',
        top: 30
    },
    headerStyle: {
        textAlign: 'center',
        color: 'gray',
        fontSize: 24
    }
}
const mapStateToProps = ( state ) => {
    const { text } = state;

    return { text }
};

export default connect( mapStateToProps )( PostRegistrationScreen );

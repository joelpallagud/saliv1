import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import Button from '../components/Button';
import { LOGO } from '../img';


class LoginScreen extends Component {
    handleClick = () => {
        this.props.navigation.navigate('Name');
    }

    render() {
        const { login, fbLogin, regLogin } = this.props.text;
        
        return (
            <View style={ styles.containerStyle } >
                <Image
                    style={ styles.logoStyle }
                    source={ LOGO }
                />
                <View>
                    <Text style={ styles.headerStyle } >
                        { login }
                    </Text>
                    <Button 
                        title={ fbLogin }
                        onPress={ this.handleClick }
                    />
                    <Button 
                        title={ regLogin }
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

    return { text };
}

export default connect( mapStateToProps )( LoginScreen );

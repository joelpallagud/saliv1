import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import ButtonLarge from '../../components/ButtonLarge';
import Background from '../../components/Background';
import HeaderText from '../../components/HeaderText';
import { LOGO } from '../../img';
import { deviceHeight } from '../../utils/dimensions';


class LoginScreen extends Component {
    signUpClick = () => {
        this.props.navigation.navigate('Signup');
    }
    
    regLoginClick = () => {
        this.props.navigation.navigate('Signin');
    }

    fbClick = () => {
        this.props.navigation.navigate('PostRegistration');
    }

    render() {
        const { login, fbLogin, regLogin, signUp } = this.props.text;
        const { containerStyle, logoStyle, headerStyle, textContainerStyle } = styles;
        
        return (
            <View style={ containerStyle } >
                <Background
                    source={ require('../../img/asset4.png') }
                />
                <Image
                    style={ logoStyle }
                    source={ LOGO }
                />
                <View style={ textContainerStyle }>
                    <HeaderText text={ login } />
                    <ButtonLarge 
                        title={ signUp }
                        onPress={ this.signUpClick }
                    />
                    <ButtonLarge 
                        title={ regLogin }
                        onPress={ this.regLoginClick }
                    />
                    <ButtonLarge 
                        title={ fbLogin }
                        onPress={ this.fbClick }
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
        width: deviceHeight*0.1,
        height: deviceHeight*0.1,
        position: 'absolute',
        top: deviceHeight*0.075
    },
    headerStyle: {
        textAlign: 'center',
        color: '#5F968E',
        fontSize: 30,
        fontFamily: 'comfortaa',
    },
    textContainerStyle: {
        backgroundColor: 'rgba( 0, 0, 0, 0)',
        alignItems: 'center', 
    }
}

const mapStateToProps = ( state ) => {
    const { text } = state;

    return { text };
}

export default connect( mapStateToProps )( LoginScreen );

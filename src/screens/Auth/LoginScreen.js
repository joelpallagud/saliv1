import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import { LOGO } from '../../img';


class LoginScreen extends Component {
    handleClick = () => {
        this.props.navigation.navigate('Name');
    }

    fbClick = () => {
        this.props.navigation.navigate('PostRegistration');
    }

    render() {
        const { login, fbLogin, regLogin } = this.props.text;
        const { containerStyle, logoStyle, headerStyle, textContainerStyle } = styles;
        
        return (
            <View style={ containerStyle } >
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
                    source={ require('../../img/asset4.png') }
                />
                <Image
                    style={ logoStyle }
                    source={ LOGO }
                />
                <View style={ textContainerStyle }>
                    <Text style={ headerStyle } >
                        { login }
                    </Text>
                    <Button 
                        title={ fbLogin }
                        onPress={ this.fbClick }
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
    },
    textContainerStyle: {
        backgroundColor: 'rgba( 0, 0, 0, 0)'
    }
}

const mapStateToProps = ( state ) => {
    const { text } = state;

    return { text };
}

export default connect( mapStateToProps )( LoginScreen );

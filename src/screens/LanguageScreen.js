import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { chooseLanguage } from '../actions';
import Button from '../components/Button';
import Background from '../components/Background';
import { LOGO } from '../img';

class LanguageScreen extends Component {
    englishHandleClick = (language) => {
        this.props.chooseLanguage('English')
        this.props.navigation.navigate('Greetings')
    }
    tagalogHandleClick = (language) => {
        this.props.chooseLanguage('Tagalog')
        this.props.navigation.navigate('Greetings')
    }

    render() {
        const { containerStyle, logoStyle, headerStyle, textContainerStyle, imageContainerStyle } = styles;
        return (
            <View style={ containerStyle } >
		        <Background
		            source={ require('../img/asset3.png') }
		        />
                 <View style={ imageContainerStyle }>
                    <Image
                        style={ logoStyle }
                        source={ LOGO }
                    />
                </View>
                <View style={ textContainerStyle }>
                    <Text style={ headerStyle } >
                        Select Language
                    </Text>
                    <Button 
                        title='English'
                        onPress={ this.englishHandleClick }
                    />
                    <Button 
                        title='Tagalog'
                        onPress={ this.tagalogHandleClick }
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
        width: 100,
        height: 100,
    },
    headerStyle: {
        textAlign: 'center',
        color: '#5F968E',
        fontSize: 30,
        fontFamily: 'comfortaa',
        marginBottom: 20
    },
    textContainerStyle: {
        backgroundColor: 'rgba( 0, 0, 0, 0)',
        flex: 7,
    },
    imageContainerStyle: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

const mapStateToProps = (state) => {
    const { language } = state.auth;

    return { language };
}

export default connect(mapStateToProps, { chooseLanguage })( LanguageScreen );

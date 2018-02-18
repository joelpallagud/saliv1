import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { chooseLanguage } from '../actions';
import Button from '../components/Button';
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
		    source={ require('../img/asset3.png') }
		  >
		</Image>
                <Image
                    style={ logoStyle }
                    source={ LOGO }
                />
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

const mapStateToProps = (state) => {
    const { language } = state.auth;

    return { language };
}

export default connect(mapStateToProps, { chooseLanguage })( LanguageScreen );

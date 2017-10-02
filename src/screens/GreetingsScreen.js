import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { showLanguage } from '../actions';
import Button from '../components/Button';
import { LOGO } from '../img';
import strings from '../data/strings';

class GreetingsScreen extends Component {
    handleClick = () => {
        this.props.navigation.navigate('Login')
    }

    componentWillMount() {
        console.log(this.props.language)
        this.props.showLanguage(this.props.language)
    }

    render() {
        const { greeting1, greeting2, greeting3, greeting4 } = this.props.text;

        return (
            <View style={ styles.containerStyle } >
                <View style={ styles.logoContainerStyle }>
                    <Image
                        style={ styles.logoStyle }
                        source={ LOGO }
                    />
                </View>
                <View style={ styles.contentContainerStyle }>
                    <View style={ styles.textContainerStyle }>
                        <Text style={ styles.textStyle } >
                            {greeting1}
                        </Text>
                        <Text style={ styles.textStyle } >
                            {greeting2} 
                        </Text>
                        <Text style={ styles.textStyle } >
                            {greeting3}
                        </Text>
                        <Text style={ styles.textStyle } >
                           {greeting4}
                        </Text>
                    </View>
                    <Button 
                        title='Next'
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
        width: 200,
        height: 200,
    },
    logoContainerStyle: {
        flex: 1,
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        backgroundColor: 'white'
    },
    textStyle: {
        textAlign: 'center',
        color: 'gray',
        fontSize: 16
    },
    contentContainerStyle: {
        flex: 1,
        alignItems: 'center', 
        backgroundColor: 'white'
    },
    textContainerStyle: {
        marginTop: 10,
        marginBottom: 20,
        alignItems: 'center', 
        backgroundColor: 'white',
    },
}

const mapStateToProps = ( state ) => {
    const { language } = state.auth;
    const { text } = state;
    
    return { text, language };
};

export default connect( mapStateToProps, { showLanguage }) ( GreetingsScreen );

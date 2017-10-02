import React, { Component } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { connect } from 'react-redux';
import Button from '../components/Button';
import Input from '../components/Input';
import { registerUser } from '../actions';
import { LOGO } from '../img';

class BirthdayScreen extends Component {
    handleClick = () => {
        this.props.navigation.navigate('Phone')
    }

    render() {
        const { askBirthday } = this.props.text;
        return (
            <View style={ styles.containerStyle } >
                <Image
                    style={ styles.logoStyle }
                    source={ LOGO }
                />
                <View>
                    <Text style={ styles.headerStyle } >
                        { askBirthday }
                    </Text>
                    <View style={ styles.inputStyle }>
                        <Input
                            placeholder="Jan 1 2000"
                            value={this.props.birthday}
                            onChangeText={value => this.props.registerUser({ prop: 'birthday', value })}
                        />
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
        width: 50,
        height: 50,
        position: 'absolute',
        top: 30
    },
    headerStyle: {
        textAlign: 'center',
        color: 'gray',
        fontSize: 24,
        marginBottom: 20
    },
    inputStyle: {
        marginBottom: 10
    },

}

const mapStateToProps = (state) => {
    const { birthday } = state.auth;
    const { text } = state

    return { birthday, text };
}

export default connect(mapStateToProps, { registerUser } )( BirthdayScreen );


import React, { Component } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { connect } from 'react-redux';
import Button from '../components/Button';
import Input from '../components/Input';
import { registerUser } from '../actions';
import { LOGO } from '../img';


class AddressScreen extends Component {
    handleClick = () => {
        this.props.navigation.navigate('Greetings')
    }

    render() {
        const { askAddress } = this.props.text;

        return (
            <View style={ styles.containerStyle } >
                <Image
                    style={ styles.logoStyle }
                    source={ LOGO }
                />
                <View>
                    <Text style={ styles.headerStyle } >
                        { askAddress }
                    </Text>
                    <View style={ styles.inputStyle }>
                        <Input
                            placeholder="Manila City"
                            value={this.props.address}
                            onChangeText={value => this.props.registerUser({ prop: 'address', value })}
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
    const { address } = state.auth;
    const { text } = state;

    return { address, text };
}

export default connect(mapStateToProps, { registerUser } )( AddressScreen );

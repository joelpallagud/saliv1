import React, { Component } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import { connect } from 'react-redux';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { registerUser } from '../../actions';
import { LOGO } from '../../img';

class EmailScreen extends Component {
    handleClick = () => {
        this.props.navigation.navigate('PostRegistration')
    }

    render() {
        const { askEmail, next } = this.props.text;

        return (
            <View style={ styles.containerStyle } >
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
		    source={ require('../../img/asset8.png') }
		  >
		</Image>
                <Image
                    style={ styles.logoStyle }
                    source={ LOGO }
                />
                <View>
                    <Text style={ styles.headerStyle } >
                        { askEmail }
                    </Text>
                    <View style={ styles.inputStyle }>
                        <Input
                            placeholder="Email Here"
                            value={this.props.email}
                            onChangeText={value => this.props.registerUser({ prop: 'email', value })}
                        />
                    </View>
                    <Button 
                        title= { next }
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
    const { email } = state.auth;
    const { text } = state;

    return { email, text };
}

export default connect(mapStateToProps, { registerUser } )( EmailScreen );


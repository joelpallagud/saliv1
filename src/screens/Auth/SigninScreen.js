import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Alert, ActivityIndicator, FlatList} from 'react-native';
import Input from "../../components/Input";
import { connect } from 'react-redux';
import Button from '../../components/Button';
import { LOGO } from '../../img';
import {signIn} from '../../helpers/firebase';
import { loginUser } from '../../actions';

class SigninScreen extends Component {
    backClick = () => {
	this.props.navigation.navigate("Home");
    }

    constructor(props) 
    {
	super(props)
	this.state - {
	    email: null,
	    password: null, 
	}
    }

    submit= () => {
	this.props.loginUser(this.state.email, this.state.password);
    }

    render() {
	return (
	    <View style = {styles.container}>
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
		/>
                <Image
                    style={ styles.logo}
                    source={ LOGO }
                />
		<View>
		    {/*}
		    <ActivityIndicator size="small" color="#00ff00" animating = {this.props.loading} />
		    <FlatList 
			data= {this.props.error}
			renderItem = {}
			keyExtractor = {item => item.number}
		    /> 
		    {*/}
		    <View style = {styles.input}>
			<Input style = { styles.input}
			    placeholder = "Email"
			    onChangeText = { (email) => this.setState({ email}) }
			    keyboardType = "email-address"
			/>
		    </View>
		    <View style = {styles.input}>
			<Input style = { styles.input}
			    placeholder = "Password"
			    autoCapitalize ={"none"}
			    secureTextEntry = {true }
			    
			    onChangeText = { (password) => this.setState({ password}) }
			/>
		    </View>
		    <View style = {styles.input}>
			<Button 
			    title = "Submit"
			    onPress = { this.submit }
			/>
		    </View>
		</View>
	    </View>
	)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'white'
    },
    logo: {
        width: 50,
        height: 50,
        position: 'absolute',
        top: 30
    },
    header: {
        textAlign: 'center',
        color: 'gray',
        fontSize: 24,
        marginBottom: 20
    },
    input: {
        paddingBottom: 10
    },
});

const mapStateToProps = (state) => {
    return {
	error: state.auth,
	loading: state.auth,
	text: state,
    }
}

export default connect(mapStateToProps, {loginUser})(SigninScreen);

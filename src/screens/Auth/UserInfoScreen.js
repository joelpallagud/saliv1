import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Alert, ActivityIndicator} from 'react-native';
import Input from "../../components/Input";
import { connect } from 'react-redux';
import Button from '../../components/Button';
import { LOGO } from '../../img';
import { userCreate } from '../../actions';
import firebase from '../../firebase';

class UserInfoScreen extends Component {
    backClick = () => {
	this.props.navigation.navigate("Home");
    }

    constructor(props) 
    {
	super(props)
	this.state - {
	    name: '',
	    birthday: '',
	    phone: '',
	    address: '',
	    error: '',
	}
    }

    submit= () => {
	this.props.userCreate(this.state.name, this.state.birthday, this.state.phone, this.state. address );
	console.log(this.props.error)
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
		    <ActivityIndicator size="small" color="#00ff00" animating = {this.props.loading} />
		    <Text> { this.props.error.message} </Text>
		    <View style = {styles.input}>
			<Input style = { styles.input}
			    placeholder = "Name"
			    onChangeText = { (name) => this.setState({ name }) }
			/>
		    </View>
		    <View style = {styles.input}>
			<Input style = { styles.input}
			    placeholder = "Birthday"
			    onChangeText = { (birthday) => this.setState({ birthday }) }
			/>
		    </View>
		    <View style = {styles.input}>
			<Input style = { styles.input}
			    placeholder = "Phone"
			    onChangeText = { (phone) => this.setState({ phone }) }
			/>
		    </View>
		    <View style = {styles.input}>
			<Input style = { styles.input}
			    placeholder = "City"
			    onChangeText = { (address) => this.setState({ address }) }
			/>
		    </View>
		    <View style = {styles.input}>
			<Button 
			    title = "Submit"
			    onPress = { this.submit }
			/>
		    </View>
		    <View style = {styles.input}>
			<Button 
			    title = "Cancel"
			    onPress = { this.backClick }
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
	error: state.profile.error,
	loading: state.profile.loading,
	text: state,
	user: state.auth.user,
    }
}

export default connect(mapStateToProps, {userCreate})(UserInfoScreen);

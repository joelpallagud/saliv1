import React, { Component } from 'react';
import { ScrollView, Text, Image, TouchableOpacity, View, Modal } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Button from '../components/Button';
import Card from '../components/Card';
import { LOGO } from '../img';
import { getCity } from"../helpers/geocoder";
import Geocoder from 'react-native-geocoder'
import Tutorial from '../components/Tutorial';



class EmergencyScreen extends Component {

    static navigationOptions = {
	tabBarLabel: 'Emergencies',
	tabBarIcon: () => (
	  <Image
	      source={require('../img/asset12.png')}
	      style = {{resizeMode: 'contain', width: 23, height: 23}}
	  />
    ),
    };
    handleClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'CardiacArrest'}),
            ]});
        this.props.navigation.dispatch(resetAction)
    }
    //For future use
    renderCards = (card, i) => {
	<Card onPress = { this.handleClick } title = { card.title } key = "card${i}"/>
    }

    constructor(props){
	super(props)
    }


    render() {
        const { emergencyHeader } = this.props.text;
	const { viewed, error}  = this.props.tutorial;

        return (
	    <View style = {{ flex:1, backgroundColor: 'transparent' }}>
		{
		    !viewed && <Tutorial />
		}
		<Image
		    style = {styles.image}
		    source={ require('../img/asset3.png') }
		  >
		</Image>
		 { !viewed && <Text> false </Text>} 
		<ScrollView style={ styles.containerStyle }>
		    <Text style={ styles.headerStyle } >
			{ emergencyHeader }
		    </Text>
		    <Card onPress={ this.handleClick } title='Sudden Cardiac Arrest' key = "card-1"/>
		    <Card onPress={ this.handleClick } title='Drowning' key = "card-2"/>
		</ScrollView>
	    </View>
        )
    }
}

const styles = {
    image: {
      backgroundColor: '#fff',
      flex: 1,
      resizeMode: 'cover',
      position: 'absolute',
      width: '100%',
      height: '100%',
      justifyContent: 'center',

    },
    containerStyle: {
        flex: 1, 
        paddingTop: 20
    },
    headerStyle: {
        textAlign: 'center',
        color: 'gray',
        fontSize: 24
    },
    tutorialStyle: {
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height:'100%',
	zIndex: 1,
	backgroundColor: "black",
	opacity: 0.5
    },
}
const mapStateToProps = (state) => {
    const { text } = state;
    const { tutorial } = state;
    
    return { text, tutorial};
}

export default connect(mapStateToProps)(EmergencyScreen);

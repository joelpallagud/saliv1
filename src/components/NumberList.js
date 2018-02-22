import React, { Component } from 'react';
import { View, TouchableHighlight, Text, FlatList, Alert } from 'react-native';
import NumberListItem from './NumberListItem';
import { Location, Permissions } from 'expo';
import { showHotlines } from '../actions':
import { connect } from 'react-redux';

class NumberList extends Component {
    constructor(props)
    {
	super(props);
	this.state = {
	    location: null,
	    errorMessage: null,
	    data: [],
	}
    }

    componentWillMount(){
	this.props.showHotlines(this.state.location);
    }


    _getLocationAsync = async () => {
	let { status } = await Permissions.askAsync(Permissions.LOCATION);
	if (status !== 'granted') {
	    this.setState({
		errorMessage: 'Permission to access location was denied',
	    });
	}
	let pos = await Location.getCurrentPositionAsync({});
	let coords = { latitude: pos.coords.latitude,
		    longitude: pos.coords.longitude}
	let location = await Location.reverseGeocodeAsync(coords);
	this.setState({location});
    };

    renderItem = ({ item }) => (
        <NumberListItem
            item={ item }
            onPress={ () => {} } 
        />
    );

    componentWillMount()
    {
	this._getLocationAsync();
    }

    render() {
        const { containerStyle, titleStyle, listContainerStyle, placeStyle, listStyle } = styles;
	let text = 'Getting location..';
	if (this.state.errorMessage) {
	    text = this.state.errorMessage;
	    Alert.alert(
		'Error getting location',
		this.state.errorMessage,
		[
		    {text: 'Ok', style: 'default'}
		]
	    )
	    text = "Metro Manila";
	} else if (this.state.location) 
	{
	    text = this.state.location[0].city;
	}

        return (
            <View style={ containerStyle }>
                <Text style={ titleStyle }>
                    Emergency Numbers
                </Text>
               <View style={ listContainerStyle }>
                    <Text style={ placeStyle }>
			{text}
                    </Text>
                    <FlatList
                        data={this.data}
                        renderItem={this.renderItem}
			keyExtractor={item => item.number}
                    />
               </View>
            </View>
        )
    }
}

const styles = {
    containerStyle : {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    titleStyle: {
        textAlign: 'center',
        fontSize: 24,
        marginTop: 40
    },
    listContainerStyle: {
        width: '90%',
        marginTop: 20
    },
    placeStyle: {
        fontSize: 24
    },
    listStyle: {
    }
}

const mapStateToProps = { state } => {
    const { location } = state.auth;
    return { location }
}
export default connect( mapStateToProps, { showHotlines })()NumberList);

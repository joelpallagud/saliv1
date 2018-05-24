import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { Location, Permissions } from 'expo';
import g from 'ngeohash';
import axios from 'axios';
import _ from 'lodash';

import firebase from '../firebase';

import Button from '../components/Button';
import Card from '../components/Card';
import HeaderText from '../components/HeaderText';
import Logo from '../components/Logo';
import { CARD_CPR, ICON_EMERGENCY } from '../img';
import { setLocation } from '../actions';
import { SEND_TEXT_ENDPOINT } from '../constants';

// import Background from '../components/Background';
// import Tutorial from '../components/Tutorial';

class EmergencyScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Emergencies',
        tabBarIcon: () => (
          <Image
              source={ICON_EMERGENCY}
              style={{ resizeMode: 'contain', width: 25, height: 25 }}
          />
        ),
    };

    state = {
        location: null,
        errorMessage: null,
        address: null
    };

    componentWillMount = async () => {
        await this.getLocationAsync();
        this.getNearbyUsers();
    }

    getLocationAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.LOCATION);
        console.log('Getting Location');
        
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        } else {
            const pos = await Location.getCurrentPositionAsync({});
            const lat = pos.coords.latitude;
            const lng = pos.coords.longitude;
            const coords = { 
                latitude: lat,
                longitude: lng,
                hash: g.encode(lat, lng),
                g10: g.encode_int(lat, lng, 24),
                g5: g.encode_int(lat, lng, 26),
                g3: g.encode_int(lat, lng, 28),
                g1: g.encode_int(lat, lng, 30)
            };
            const place = await Location.reverseGeocodeAsync({
                latitude: lat,
                longitude: lng
            });

            this.setState({ location: coords, address: place });
            this.props.setLocation(this.state.location);
        }
    };

    getNearbyUsers = () => {
        const lat = this.state.location.latitude;
        const lng = this.state.location.longitude;
        const ref = firebase.database().ref('users')
            .orderByChild('g5')
            .startAt(g.neighbor_int(g.encode_int(lat, lng, 26), [-1, -1], 26))
            .endAt(g.neighbor_int(g.encode_int(lat, lng, 26), [1, 1], 26));
        
        ref.once('value', (snapshot) => {
            let nearbyUsers = [];
            snapshot.forEach((childSnapshot) => {
                nearbyUsers.push(childSnapshot.child('phone').val());
            });
            nearbyUsers = _.uniq(nearbyUsers);
            this.sendTexts(nearbyUsers);
        })
        .catch((err) => console.log(err));
    }

    sendTexts = async (nearbyUsers) => {
        const nearbyUsersNumbers = nearbyUsers.join(',');
        const { city, name, region, street } = this.state.address[0];
        const lat = this.state.location.latitude;
        const lng = this.state.location.longitude;
        const place = `${name} ${street} St. ${city}, ${region}`;
        const data = {
            numbers: nearbyUsersNumbers,
            place,
            lat, 
            lng
        };
        console.log(data);
        await axios.post(SEND_TEXT_ENDPOINT, data, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }
    
    handleClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: 'Infant'
                })
            ] 
        });
        this.props.navigation.dispatch(resetAction);
    }
    //For future use
    // renderCards = (card, i) => {
	// <Card onPress ={this.handleClick} title ={card.title} key= "card${i}" />;
    // }

    render() {
        const { emergencyHeader, practiceButton } = this.props.text;
        // const { viewed, error } = this.props.tutorial;

        return (
            <View style={styles.containerStyle}>
                {/* <Background 
                    source={ require('../img/asset3.png') }
                /> */}
                {/* { !viewed && <Tutorial /> } */}
                <View style={styles.containerStyle}>
                    <Logo />
                    <HeaderText text={emergencyHeader} />
                    <Card title='CPR' key="card-1" src={CARD_CPR} />
                    <Button title={practiceButton} onPress={this.handleClick} />
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white'
    },
};
const mapStateToProps = (state) => {
    const { text } = state;
    const { tutorial } = state;
    
    return { text, tutorial };
};

export default connect(mapStateToProps, { setLocation })(EmergencyScreen);

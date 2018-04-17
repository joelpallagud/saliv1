import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Button from '../components/Button';
import Card from '../components/Card';
import HeaderText from '../components/HeaderText';
import Logo from '../components/Logo';
// import Background from '../components/Background';
// import Tutorial from '../components/Tutorial';

class EmergencyScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Emergencies',
        tabBarIcon: () => (
          <Image
              source={require('../img/asset12.png')}
              style={{ resizeMode: 'contain', width: 25, height: 25 }}
          />
        ),
    };

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
                    <Card title='CPR' key="card-1" />
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

export default connect(mapStateToProps)(EmergencyScreen);

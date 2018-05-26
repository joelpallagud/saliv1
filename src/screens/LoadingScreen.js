import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { LOGO } from '../img';

class LoadingScreen extends Component {
    componentDidMount() {
        const { navigation } = this.props;
        setTimeout(() => navigation.navigate('Language'), 2000);
    }

    render() {
        return (
            <View style={styles.containerStyle} >
                <Image
                    style={styles.logoStyle}
                    source={LOGO}
                />
            </View>
        );
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
        width: 100,
        height: 100
    }
};

export default LoadingScreen;

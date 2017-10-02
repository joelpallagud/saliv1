import React, { Component } from 'react';
import { View, Text, Animated, Easing } from 'react-native';

class Overlay extends Component {
    constructor() {
        super();
        this.easingValue = new Animated.Value(0)
    }
    componentDidMount () {
        this.ease()
    }
    ease() {
        Animated.timing (
            this.easingValue,
                {
                    toValue: 1,
                    duration: 5000,
                }
            ).start(() => this.ease())
    }

    render() {
        const { containerStyle, titleStyle } = styles;
        const opacity = this.easingValue.interpolate({
            inputRange: [0, 0.7, 0.9, 0.99, 1],
            outputRange: [0.8, 0.8, 0.1, 0, 0]
        });
        const move = this.easingValue.interpolate({
            inputRange: [0, 0.7, 0.9, 0.99, 1],
            outputRange: [0, 0, 0, 0, 2000]
        });

        return (
            <Animated.View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 1)',
                opacity,
                transform: [{ translateX: move }]
            }}>
                <Text style={ titleStyle }>
                    { this.props.title }
                </Text>
            </Animated.View>
        )
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    titleStyle: {
        fontSize: 32,
        color: 'white'
    }
};

export default Overlay;

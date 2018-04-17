import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import NumberListScreen from '../../components/NumberListScreen';


class CPRCallScreen extends Component {
    resetNavigate = (route, noParams, params) => {
        if (noParams) {
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({
                        routeName: route,
                        params
                    })
                ]
            });
            this.props.navigation.dispatch(resetAction);
        } else {
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({
                        routeName: route
                    })
                ]
            });
            this.props.navigation.dispatch(resetAction);
        }
    }

    backClick = () => {
        this.resetNavigate('Home');
    }

    nextClick = () => {
        const { isNotSafe } = this.props.navigation.state.params;
        if (isNotSafe) {
            this.resetNavigate('Ambulance');
        } else {
            this.resetNavigate('PulseCheck');
        }
    }

    render() {
    const { call } = this.props.text;
    console.log(this.props.navigation.state.params);

	return (
		<NumberListScreen 
			question={call}
			backClick={this.backClick}
			nextClick={this.nextClick}
		/>
	);
    }
}

const mapStateToProps = (state) => {
    const { text } = state;

    return { text };
};

export default connect(mapStateToProps)(CPRCallScreen);

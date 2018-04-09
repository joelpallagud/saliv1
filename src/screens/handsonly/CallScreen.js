import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import NumberListScreen from '../../components/NumberListScreen';


class CallScreen extends Component {
    backClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: 'Check'
                })
            ]
        });
        this.props.navigation.dispatch(resetAction);
    }

    nextClick = () => {
        const { isNotSafe } = this.props.navigation.state.params;
        if (isNotSafe) {
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({
                        routeName: 'Ambulance'
                    })
                ]
            });
            this.props.navigation.dispatch(resetAction);
        } else {
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({
                        routeName: 'Compress'
                    })
                ]
            });
            this.props.navigation.dispatch(resetAction);
        }
    }

    render() {
	const { call } = this.props.text;

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

export default connect(mapStateToProps)(CallScreen);


import React, { Component } from 'react';  
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import QuestionScreen from '../../components/QuestionScreen';


class ChildScreen extends Component {
    noClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            key: null,
            actions: [
                NavigationActions.navigate({
                    routeName: 'Drowning'
                })
            ]
        });	
        this.props.navigation.dispatch(resetAction);
    }

    yesClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: 'CPRSurvey'
                })
            ] 
        });
        this.props.navigation.dispatch(resetAction);
    }
    
    render() {
        const { childQuestion } = this.props.text;

        return (
            <QuestionScreen 
                question={childQuestion}
                backClick={this.noClick}
                nextClick={this.yesClick}
            />
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state.subtitles);

    return {
        text: state.text,
        subtitles: state.subtitles,
    };
};

export default connect(mapStateToProps)(ChildScreen);

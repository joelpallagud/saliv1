import React, { Component } from 'react'; 
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import QuestionScreen from '../../components/QuestionScreen';


class InfantScreen extends Component {
    noClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            key: null,
            actions: [
                NavigationActions.navigate({
                    routeName: 'Child'
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
                    routeName: 'InfantSurvey'
                })
            ]
        });
        this.props.navigation.dispatch(resetAction);
    }
    
    render() {
        const { infantQuestion } = this.props.text;

        return (
            <QuestionScreen 
                question={infantQuestion}
                backClick={this.noClick}
                nextClick={this.yesClick}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    text: state.text,
    subtitles: state.subtitles,
});

export default connect(mapStateToProps)(InfantScreen);

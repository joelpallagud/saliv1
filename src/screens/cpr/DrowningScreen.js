import React, { Component } from 'react'; 
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import QuestionScreen from '../../components/QuestionScreen';


class DrowningScreen extends Component {
    noClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            key: null,
            actions: [
                NavigationActions.navigate({
                    routeName: 'Survey'
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
        const { drowningQuestion } = this.props.text;

        return (
            <QuestionScreen 
                question={drowningQuestion}
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

export default connect(mapStateToProps)(DrowningScreen);

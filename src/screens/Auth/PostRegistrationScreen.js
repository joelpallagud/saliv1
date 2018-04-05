import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import Button from '../../components/Button';
import Background from '../../components/Background';
import HeaderText from '../../components/HeaderText';
import { LOGO } from '../../img';
import { deviceWidth, deviceHeight } from '../../utils/dimensions';


class PostRegistrationScreen extends Component {
    handleClick = () => {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'Home'})
            ]});
        this.props.navigation.dispatch(resetAction);
    }

    render() {
        const { postReg, postRegButton } = this.props.text;
        const { containerStyle, bodyContainerStyle, headerStyle, logoStyle } = styles;

        return (
            <View style={ containerStyle } >
		        <Background
		            source={ require('../../img/asset3.png') }
		        />
                <Image
                    style={ logoStyle }
                    source={ LOGO }
                />
                <View style={ bodyContainerStyle }>
                    <HeaderText text={ postReg } />
                    <Button 
                        title={ postRegButton }
                        onPress={ this.handleClick }
                    />
                </View>
            </View>
        )
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
        width: deviceHeight*0.1,
        height: deviceHeight*0.1,
        position: 'absolute',
        top: deviceHeight*0.075
    },
    bodyContainerStyle: {
        alignItems: 'center', 
        width: deviceWidth*0.8
    }
}
const mapStateToProps = ( state ) => {
    const { text } = state;

    return { text }
};

export default connect( mapStateToProps )( PostRegistrationScreen );

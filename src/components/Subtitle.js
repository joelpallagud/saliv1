import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

class SubtitleComponent extends Component {
    constructor(props){
		super(props);
		this.state = {
		    line: "",
		    length:1000,
		    count: 0,
		}
    }

    getNewLine = () => {
		return this.props.subtitles[this.state.count].text
    }
    getNewLength = () => {
		return this.props.subtitles[this.state.count].duration
    }

    incrementCount = () => {
		return this.state.count + 1
    }

    repeatSubs = () => {
		if(this.props.subtitles.length > this.state.count) {
		    this.setState({
				line: this.getNewLine(),
				count: this.incrementCount(),
				length: this.getNewLength(),
		    })
		}	
		else {
		    this.setState({
				count: 0,
		    })
		}
    }

    componentDidMount(){
	    this.interval = setInterval(
			() => {this.repeatSubs()}, this.state.length
		)
    }
    

    componentWillUnmount(){
		clearInterval(this.interval);
	}
	
    render() {
		return (
		    <View style = {styles.container}>
				<Text style={styles.subtitles}>
			  		{ this.state.line }
				</Text>
		    </View>
		)
    }
}

const styles = StyleSheet.create({
    container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: "space-around",
		alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0)'
    },
    subtitles: {
		textAlign: 'center',
		fontSize: 25 
	} 
}) 

export default SubtitleComponent;
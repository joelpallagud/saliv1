import React, { Component } from 'react';
import { View, TouchableHighlight, Text, FlatList } from 'react-native';
import NumberListItem from './NumberListItem';

class NumberList extends Component {
    data = [
        {
            place: 'Medical City',
            number: '(02) 641-4567'
        },
        {
            place: 'Medical City',
            number: '(02) 641-4567'
        },
        {
            place: 'Medical City',
            number: '(02) 641-4567'
        },
        {
            place: 'Medical City',
            number: '(02) 641-4567'
        }
    ];

    renderItem = ({ item }) => (
        <NumberListItem
            item={ item }
            onPress={ () => {} } 
        />
    );

    render() {
        const { containerStyle, titleStyle, listContainerStyle, placeStyle, listStyle } = styles;

        return (
            <View style={ containerStyle }>
                <Text style={ titleStyle }>
                    Emergency Numbers
                </Text>
               <View style={ listContainerStyle }>
                    <Text style={ placeStyle }>
                        Manila
                    </Text>
                    <FlatList
                        data={this.data}
                        renderItem={this.renderItem}
                    />
               </View>
            </View>
        )
    }
}

const styles = {
    containerStyle : {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center'
    },
    titleStyle: {
        textAlign: 'center',
        fontSize: 24,
        marginTop: 40
    },
    listContainerStyle: {
        width: '90%',
        marginTop: 20
    },
    placeStyle: {
        fontSize: 24
    },
    listStyle: {
    }
}

export default NumberList;

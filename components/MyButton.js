import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MyButton = (props) => {
    return (
        <TouchableOpacity style={ styles.button } onPress={ props.onClick }>
            <Text style={ styles.text }>{ props.title }</Text>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#4caf50',
        color: '#FFFFFF',
        padding: 10,
        marginTop: 16,
        marginHorizontal: 35
    },
    text: {
        color: '#FFFFFF'
    }
})

export default MyButton;
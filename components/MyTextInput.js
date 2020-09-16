import React from 'react';
import { View, TextInput } from 'react-native';

const MyTextInput = (props) => {
    return (
        <View
            style={{
                marginHorizontal: 35,
                marginTop: 10,
                borderColor: '#4caf50',
                borderWidth: 1,
            }}
        >
            <TextInput
                underlineColorAndroid='transparent'
                placeholder={props.placeholder}
                placeholderTextColor='#4caf50'
                keyboardType={props.keyboardType}
                onChangeText={props.onChangeText}
                returnKeyType={props.returnKeyType}
                numberOfLines={props.numberOfLines}
                multiline={props.multiline}
                onSubmitEditing={props.onSubmitEditing}
                style={props.style}
                blurOnSubmit={false}
                value={props.value}
            >
            
            </TextInput>
        </View>
    )
}

export default MyTextInput;
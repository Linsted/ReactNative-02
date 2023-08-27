import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function GoalInput({ addButtonHandler }) {

    const [enteredText, setEnteredText] = useState('');

    const inputHandler = (text) => setEnteredText(text);
    const buttonHandler = () => {
        addButtonHandler(enteredText);
        setEnteredText('');
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                onChangeText={inputHandler}
                style={styles.textInput}
                placeholder='Your goal'
                value={enteredText}
            />
            <Button
                title='Add Goal'
                onPress={buttonHandler}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '70%',
        paddingLeft: 10,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 8,
        marginBottom: 24,
        borderBottomWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
    },
})
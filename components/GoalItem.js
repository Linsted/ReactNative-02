import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function GoalItem({ text }) {
    return (
        <View style={styles.item}>
            <Text style={styles.itemText}>{text}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    item: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    itemText: {
        color: 'white',
    },
});

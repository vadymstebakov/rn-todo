import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    item: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 7,
        elevation: 3,
        backgroundColor: '#2ecc71',
        padding: 10,
        marginBottom: 15,
    },
    text: {
        fontSize: 16,
        color: '#000',
    },
});

const Item = props => {
    const { text, id, onRemoveItem } = props;

    const removeHandler = () => onRemoveItem(id);

    return (
        <TouchableOpacity style={styles.item} onPress={removeHandler}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

export default Item;

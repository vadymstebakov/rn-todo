import React, { useState, useRef } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';

const styles = StyleSheet.create({
    form: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
    },
    btn: {
        width: '100%',
        marginTop: 10,
    },
});

const Form = props => {
    const { onAddItem } = props;
    const inputTextRef = useRef(null);
    const [text, setText] = useState('');
    const [disabled, setDisabled] = useState(true);

    const changeTextHandler = inputText => {
        if (inputText.trim()) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }

        setText(inputText);
    };

    const addItemHandler = () => {
        onAddItem(text);
        setText('');
        setDisabled(true);
        inputTextRef.current.blur();
    };

    return (
        <View style={styles.form}>
            <TextInput
                ref={inputTextRef}
                style={styles.input}
                onChangeText={changeTextHandler}
                value={text}
                placeholder="Enter value..."
            />
            <View style={styles.btn}>
                <Button disabled={disabled} title="Add Item" color="#34495e" onPress={addItemHandler} />
            </View>
        </View>
    );
};

export default Form;

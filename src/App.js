import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { registerRootComponent } from 'expo';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'tomato',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
});

const App = () => {
    const [list, setList] = useState(() => []);

    const onAddItem = text => {
        setList(prevState => [{ text, id: Math.random().toString(36).substring(7) }, ...prevState]);
    };

    const onRemoveItem = id => {
        setList(prevState => prevState.filter(item => item.id !== id));
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header count={list.length} />
            <Form onAddItem={onAddItem} />
            <List list={list} onRemoveItem={onRemoveItem} />
            <ExpoStatusBar style="auto" />
        </SafeAreaView>
    );
};

export default registerRootComponent(App);

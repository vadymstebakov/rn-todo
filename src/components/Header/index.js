import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    header: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 7,
        elevation: 3,
        backgroundColor: '#2ecc71',
        padding: 10,
    },
    text: count => {
        return {
            textAlign: 'center',
            color: count > 0 ? '#9b59b6' : '#000',
            textTransform: 'uppercase',
            fontSize: 18,
            fontWeight: '700',
        };
    },
});

const Header = props => {
    const { count } = props;

    return (
        <View style={styles.header}>
            <Text style={styles.text(count)}>TODO List {count ? `(${count})` : null}</Text>
        </View>
    );
};

export default Header;

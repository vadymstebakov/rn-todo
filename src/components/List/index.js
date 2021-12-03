import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Item from './Item';

const styles = StyleSheet.create({
    list: {
        margin: 10,
    },
});

const List = props => {
    const { list, onRemoveItem } = props;

    const renderItem = ({ item }) => <Item text={item.text} id={item.id} onRemoveItem={onRemoveItem} />;

    return (
        <FlatList
            contentContainerStyle={styles.list}
            data={list}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    );
};

export default List;

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <FlatList
                scrollEnabled={true}
                data={[
                    { key: "a", name: 'Devin' },
                    { key: "b", name: 'Dan' },
                    { key: "c", name: 'Dominic' },
                    { key: "d", name: 'Jackson' },
                    { key: "e", name: 'James' },
                    { key: "f", name: 'Joel' },
                    { key: "g", name: 'John' },
                    { key: "h", name: 'Jillian' },
                    { key: "i", name: 'Jimmy' },
                    { key: "j", name: 'Julie' },
                    { key: "k", name: 'David' },
                    { key: "l", name: 'Danny' },
                    { key: "m", name: 'Darla' },
                ]}
                renderItem={({ item }) =>
                    <View style={styles.item}>
                        <Image
                            source={{ uri: 'https://reactnative.dev/docs/assets/p_cat1.png' }}
                            style={{ width: 50, height: 50 }}
                        />
                        <Text style={styles.item}>
                            {item.name}
                        </Text>
                    </View>
                }
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        paddingTop: 16,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    item: {
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        fontSize: 18,
        height: 70,
    },
});

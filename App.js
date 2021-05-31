import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image, FlatList, StyleSheet, Text, View } from 'react-native';

export default function App() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=20')
            .then(response => response.json())
            .then(data => {
                setUsers(data.results)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                scrollEnabled={true}
                data={users}
                keyExtractor={(item) => item.login.uuid.toString()}
                renderItem={({ item }) =>
                    <View style={styles.item}>
                        <Image
                            source={{ uri: item.picture.medium }}
                            style={{ width: 50, height: 50, marginEnd: 10 }}
                        />
                        <Text style={styles.text_normal}>
                            {`${item.name.title} ${item.name.first} ${item.name.last}`}
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
        paddingTop: 24,
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
    text_normal: {
        fontSize: 18,
        textAlignVertical: 'center'
    },
});

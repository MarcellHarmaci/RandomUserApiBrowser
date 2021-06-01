import React, { useEffect, useState } from 'react';
import { Image, FlatList, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

export default function RandomUsers({ navigation }) {
    const [users, setUsers] = useState([])
    const [isFetching, setIsFetching] = useState(false)

    useEffect(() => {
        fetchUsersAsync()
    }, [])

    async function fetchUsersAsync() {
        await fetch('https://randomuser.me/api/?results=20')
            .then(response => response.json())
            .then(data => {
                setUsers(data.results)
            })
            .catch(error => {
                console.error(error)
            })
    }

    async function onRefresh() {
        setIsFetching(true)

        setUsers([])
        await fetchUsersAsync()

        setIsFetching(false)
    }

    const navigateToUser = () => {
        navigation.navigate("UserDetails")
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                scrollEnabled={true}
                refreshing={isFetching}
                onRefresh={() => onRefresh()}
                keyExtractor={(item) => item.login.uuid}
                renderItem={({ item }) =>
                    <TouchableWithoutFeedback onPress={navigateToUser}>
                        <View style={styles.item}>
                            <Image
                                source={{ uri: item.picture.medium }}
                                style={{ width: 50, height: 50, marginEnd: 8 }}
                            />
                            <Text style={styles.text_normal}>
                                {`${item.name.title} ${item.name.first} ${item.name.last}`}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
    },
    item: {
        width: '100%',
        flexDirection: 'row',
        padding: 8,
        fontSize: 18,
        height: 70,
    },
    text_normal: {
        fontSize: 18,
        textAlignVertical: 'center'
    },
});
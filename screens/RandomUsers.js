import React, { useEffect, useState } from 'react';
import { Button, Image, FlatList, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { State } from 'react-native-gesture-handler';

export default function RandomUsers({ navigation }) {
    const [users, setUsers] = useState([])
    const [isFetching, setIsFetching] = useState(false)
    const [randomSeed, setRandomSeed] = useState(42)
    const [page, setPage] = useState(1)

    useEffect(() => {
        let currentSeed = generateRandomSeed()
        fetchUsersAsync(currentSeed, page)
    }, [])

    function generateRandomSeed() {
        let newSeed = Math.floor(Math.random() * 1000)
        setRandomSeed(newSeed)
        return newSeed
    }

    async function fetchUsersAsync(currentSeed, currentPage) {
        await fetch(`https://randomuser.me/api/?results=20&seed=${currentSeed}&page=${currentPage}`)
            .then(response => response.json())
            .then(data => {
                setUsers(data.results)
                setUsers(data.results)
            })
            .catch(error => {
                console.error(error)
            })
    }

    async function onRefresh(currentPage, newSeedNeeded) {
        setIsFetching(true)

        setUsers([])
        let newSeed = false
        if (newSeedNeeded) {
            newSeed = generateRandomSeed()
        }
        let currentSeed = newSeed ? newSeed : randomSeed
        await fetchUsersAsync(currentSeed, currentPage)

        setIsFetching(false)
    }

    const navigateToUser = (user) => {
        navigation.navigate("UserDetails", user)
    };

    function prevPage() {
        onRefresh(page - 1, false)

        setPage(page - 1)
    }

    function nextPage() {
        onRefresh(page + 1, false)

        setPage(page + 1)
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={users}
                scrollEnabled={true}
                refreshing={isFetching}
                onRefresh={() => onRefresh(page, true)}
                keyExtractor={(item) => item.login.uuid}
                renderItem={({ item }) =>
                    <TouchableWithoutFeedback onPress={() => navigateToUser(item)}>
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
            <View style={styles.pager}>
                <Button
                    title="Prev"
                    onPress={() => prevPage()}
                    disabled={page == 1}
                />
                <Text style={styles.text_normal}>{page}</Text>
                <Button
                    title="Next"
                    onPress={() => nextPage()}
                />
            </View>
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
    pager: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8
    }
});
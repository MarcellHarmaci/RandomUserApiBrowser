import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image, FlatList, StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function NavigationStack() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            headerMode="screen"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: 'lightseagreen' },
            }}
        >
            <Stack.Screen
                name="RandomPeople"
                component={RandomPeople}

            />
            <Stack.Screen
                name="PersonDetails"
                component={PersonDetails}
            />
        </Stack.Navigator>
    );
}

function RandomPeople({ navigation }) {
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

    const navigateToPerson = () => {
        navigation.navigate("PersonDetails")
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
                    <TouchableWithoutFeedback onPress={navigateToPerson}>
                        <View style={styles.item}>
                            <Image
                                source={{ uri: item.picture.medium }}
                                style={{ width: 50, height: 50 }}
                            />
                            <Text style={styles.item}>
                                {`${item.name.title} ${item.name.first} ${item.name.last}`}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                }
            />
            <StatusBar style="auto" />
        </View>
    );
}

function PersonDetails({ navigation }) {
    return (
        <View>
            <Text>
                Hello world!
            </Text>
        </View>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <NavigationStack />
        </NavigationContainer>
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

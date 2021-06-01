import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import RandomUsers from './screens/RandomUsers';
import UserDetails from './screens/UserDetails';

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
                name="RandomUsers"
                component={RandomUsers}

            />
            <Stack.Screen
                name="UserDetails"
                component={UserDetails}
            />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <NavigationStack />
        </NavigationContainer>
    );
}

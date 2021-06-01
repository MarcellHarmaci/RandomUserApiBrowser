import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import RandomUsers from '../screens/RandomUsers';
import UserDetails from '../screens/UserDetails';

const Stack = createStackNavigator();

export default function NavigationStack() {
    return (
        <Stack.Navigator
            initialRouteName="RandomUsers"
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
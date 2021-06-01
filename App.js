import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import NavigationStack from './navigation/NavigationStack';

export default function App() {
    return (
        <NavigationContainer>
            <NavigationStack />
        </NavigationContainer>
    );
}

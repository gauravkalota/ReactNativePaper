import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailsScreen from '../screens/DetailsScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingScreen from '../screens/SettingScreen';
const Stack = createNativeStackNavigator();

function HomeComponent() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Setting" component={SettingScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default HomeComponent
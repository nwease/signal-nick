import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import Register from './screens/Register';

export default function App() {

    const Stack = createStackNavigator();

    const globalScreenOptions = {
        headerStyle: {backgroundColor: '#2C6BED'},
        headerTitleStyle: {color: '#fff'},
        headerTintColor: '#fff'
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={globalScreenOptions}>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Register' component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

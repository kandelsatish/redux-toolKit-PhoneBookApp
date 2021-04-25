import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import App from '../App';
import Login from './Login';
const Stack=createStackNavigator();
export default function AuthStack() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="App" component={App}/>
        </Stack.Navigator>
    )
}

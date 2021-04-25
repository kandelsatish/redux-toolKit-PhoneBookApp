import React from 'react'
import { Provider } from 'react-redux'
import App from '../App'
import store from '../app/store'
import {NavigationContainer} from '@react-navigation/native'
import AuthStack from './AuthStack'
export default function Main() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <AuthStack/>
            </NavigationContainer>
        </Provider>
    )
}

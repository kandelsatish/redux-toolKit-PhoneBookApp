import {configureStore} from '@reduxjs/toolkit'
import contactReducer from './contactSlice'
import authReducer from './authenticationSlice'
export default configureStore({
    reducer:{
        contact:contactReducer,
        authentication:authReducer,
    }
})
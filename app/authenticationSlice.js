import {createSlice} from '@reduxjs/toolkit'

export const authenticationSlice=createSlice({
    name:"authentication",
    initialState:{
       authentication:[]
    },
    reducers:{
        login:(state,action)=>{
            state.authentication=action.payload;
        }
    }
})

export const {login}=authenticationSlice.actions;

export default authenticationSlice.reducer;
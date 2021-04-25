import { createSlice } from '@reduxjs/toolkit'
import { Item } from 'native-base';

export const contactSlice=createSlice({
    name:"contact",
    initialState:{
        contact:[]
    },
    reducers:{
        deleteContact :(state,action)=>{
            state.contact=state.contact.filter(item=>{
                return item.username!=action.payload.username;
            })
        },
        addContact:(state,action)=>{
            state.contact=[...state.contact,action.payload];
        },
    }
})

export const {deleteContact,addContact}=contactSlice.actions;

export default contactSlice.reducer;
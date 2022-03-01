import {createSlice, nanoID} from "@reduxjs/toolkit";

const createHuman =  (name)=>({
    id: nanoID(),
    name,
    taskIds: [],
})

const initialState = [
    createHuman('Steve'),
    createHuman('Mosh'),
    createHuman('Tanner'),
    createHuman('Josh'),
]

export const humanSlice = createSlice({
    name: 'humans',
    initialState,
    reducers:{
        add:(state,action) => state.push(createHuman(action.payload))
    }
})
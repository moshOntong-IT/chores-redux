import {createSlice, nanoID} from "@reduxjs/toolkit";
import { tasksSlice } from "./tasksSlice";

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
    },
    extraReducers: builder =>{
        builder.addCase(tasksSlice.action.assignToUser,(state,action)=>{
            for(const human of state){
                if(human.id === action.payload.humanId){
                    human.taskIds.push(action.payload.taskId)
                }else{
                    human.taskIds = human.taskIds.filter(
                        taskId => taskId !== action.payload.taskId
                        );
                }
            }
        })
    }
})
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    todos:[
        {
            id:0,
            title:'Do chores',
            description:'Hey, you should do chores later at 5PM!'
        }
    ]
}

let id = 0;
const listSlice = createSlice({
    name:'list',
    initialState,
    reducer:{
        add:(state,action)=>{
            id++;
            state.todos.push({...action.payload,id:id});
        }
    }
});


const listReducers = listSlice.reducer;
export default listReducers;
export const listActions = listSlice.actions;

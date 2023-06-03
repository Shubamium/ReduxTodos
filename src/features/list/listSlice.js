import {configureSlice} from '@reduxjs/toolkit';

const initialState = {
    todos:[
        {
            id:0,
            title:'Do chores',
            description:'Hey, you should do chores later at 5PM!'
        }
    ]
}

const id = 0;
const listSlice = configureSlice({
    name:'list',
    initialState,
    reducer:{
        add:(state,action)=>{
            id++;
            state.todos.push({...action.payload,id:id});
        }
    }
});


const listReducers = listSlice.reducers;
export default listReducers;
export const listActions = listSlice.actions;

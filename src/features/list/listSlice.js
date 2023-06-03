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
    reducers:{
        add:(state,action)=>{
            id++;
            state.todos.push({...action.payload,id:id});
        },
        remove:(state,action)=>{
            // state.todos.splice(action.payload,1); Doesn't work if want to delete specific id
            state.todos = state.todos.filter((list) => list.id != action.payload); 
        },
        edit:(state,action)=>{
            state.todos[action.payload.id] = {...state.todos[action.payload.id],...action.payload.data};
        }
    }
});


const listReducers = listSlice.reducer;
export default listReducers;
export const listActions = listSlice.actions;

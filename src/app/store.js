import {configureStore} from '@reduxjs/toolkit'
import listReducers from '../features/list/listSlice';

const store = configureStore({
    reducer:{
        list:listReducers
    }
});


export default store;
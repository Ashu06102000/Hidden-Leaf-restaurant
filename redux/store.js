import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../redux/menuSlice';

export default configureStore({
    reducer:{
        cart:cartReducer,
    },
});
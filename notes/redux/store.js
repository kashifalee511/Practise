import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchslices";
export const store = configureStore({
    reducer:{
        search : searchReducer,
    }
})
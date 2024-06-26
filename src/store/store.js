import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice"

const store = configureStore({
    reducer: {
        auth: authSlice
        // need to add reducers for post
    }
})

export default store
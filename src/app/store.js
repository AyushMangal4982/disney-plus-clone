import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice.js";
import movieReducer from "../features/movie/moviesSlice.js";

export default configureStore({
    reducer: {
        user:userReducer,
        movie:movieReducer
    },
    middleware:getDefaultMiddleware({
        serializableCheck:false,
    }),
})
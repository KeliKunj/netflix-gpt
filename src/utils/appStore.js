import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesSlice from "./moviesSlice";
import gptSearchSlice from "./gptSearchSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
    reducer:{
        user: userReducer,
        movies: moviesSlice,  
        gpt: gptSearchSlice,
        config: configReducer,
    },
});

export default appStore;
import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPTSearch: false,
        movieNames: null,
        movieResults: null,
    },
    reducers: {
        toggleGPTSearchView: (state, action) => {
            state.showGPTSearch = action.payload || !state.showGPTSearch;
        },
        addGptMovies: (state, action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },   
        clearGptStore: (state) => {
            state.movieNames = null;
            state.movieResults = null;
        }
    },
});

export const {toggleGPTSearchView, addGptMovies, clearGptStore} = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
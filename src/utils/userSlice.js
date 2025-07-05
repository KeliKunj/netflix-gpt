import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            return action.payload; 
            // This will replace the state with the new user object state=action.payload;
        },
        removeUser: (state, action) => {
          return null;  
        },
    },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
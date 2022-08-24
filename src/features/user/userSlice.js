import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    // initialState: {user: {email: "", uid: "", name: "", favorites: ""}},
    initialState: {user: null},
    reducers: {
        setUser: (state, action) => {
            // const newUser = {
            //     email: action.payload.email,
            //     uid: action.payload.uid,
            // }
            // state.user = newUser;
            state.user = action.payload;
        }
    }
})

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
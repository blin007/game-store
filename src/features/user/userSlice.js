import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    email: null,
    uid: null,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            // console.log('payload: ', action.payload)
            // const newUser = {
            //     email: action.payload.email,
            //     uid: action.payload.uid,
            // }
            state.email = action.payload.email;
            state.uid = action.payload.uid;
            // state.user = action.payload;
        }
    }
})

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
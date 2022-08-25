import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const gameListSlice = createSlice({
    name: "gameList",
    initialState,
    reducers: {
        addGames: (state, action) => {
            // console.log("action payload: ", action.payload)
            state.push(action.payload)
        },
        clearGames: (state) => {
            state.splice(0, state.length);
        }
    }
})

export const { addGames, clearGames } = gameListSlice.actions

export default gameListSlice.reducer
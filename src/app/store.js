import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../features/cart/cartSlice'
import userReducer from '../features/user/userSlice'
import gameListReducer from '../features/gameList/gameList'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        gameList: gameListReducer,
    },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: false
    //     })
})
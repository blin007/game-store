import { createSlice } from "@reduxjs/toolkit"

const initialState = []

export const cartTotal = (cart) => 
    cart?.reduce((prevItemPrice, currItem) => currItem.price + prevItemPrice, 0)

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload) //same as [...state, action.payload]
        },
        delFromCart: (state, action) => {
            const itemToDelID = action.payload;
            const index = state.findIndex(
                (item) => item.id === itemToDelID 
            )
            console.log(index);
            if (index >= 0){
                state.splice(index, 1);
            }
        },
        clearCart: (state) => {
            state.splice(0, state.length)
        },
    }
})

export const { addToCart, delFromCart, clearCart } = cartSlice.actions;

export const cart = state => state.cart;

export default cartSlice.reducer;
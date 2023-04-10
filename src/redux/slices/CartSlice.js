import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartList: [],
        cartCount: 0,
        totalPrice: 0,
    },
    reducers: {
        addToCart(state, action) {
            let isMatched = false;
            state.cartList.map(obj => {
                if (obj.id === action.payload.id) { isMatched = true }
            })
            {
                isMatched !== true &&
                    (state.cartList.push(action.payload),
                        state.cartCount += 1,
                        state.totalPrice += action.payload.price)
            }
        },
        removeFromCart(state, action) {
            state.cartList = state.cartList.filter(item => item.id !== action.payload.id),
                state.cartCount -= 1,

                state.totalPrice = !state.cartCount == 0 ?
                    (state.totalPrice -= action.payload.price) :
                    (state.totalPrice = 0)

        }
    },
})

export const { addToCart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer
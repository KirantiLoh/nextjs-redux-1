import { Item } from './../../typings.d';
import { RootState } from './../store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import cartItems from 'items';

export interface Cart {
    items: Item[] | []
    amount: number
    total: number
    isLoading: boolean
}

const url ="https://course-api.com/react-useReducer-cart-project"

export const getCartItems = createAsyncThunk('cart/getCartItems', async (_: void, thunkAPI) => {
    console.log(thunkAPI.getState())
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (err) {
        return console.error(err);
    }
})

const initialState: Cart = {
    items: [],
    amount: 0,
    total: 0,
    isLoading: true
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.items = []
            state.amount = 0
            state.total = 0
        },
        removeItem: (state, action) => {
            const itemId = action.payload
            state.items = state.items.filter(item => item.id !== itemId)
        },
        increaseItem: (state, action) => {
            const curItem = state.items.find(item => item.id === action.payload)
            if (curItem) {
                curItem.amount += 1
            }
        },
        decreaseItem: (state, action) => {
            const curItem = state.items.find(item => item.id === action.payload)
            if (curItem) {
                curItem.amount -= 1
            }
        },
        calculateTotal: (state) => {
            let amount = 0
            let total = 0
            state.items.forEach(item => {
                amount += item.amount
                total += item.price * item.amount
            })
            state.amount = amount
            state.total = total
        },
        setItems: (state, action) => {
            state.items = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCartItems.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getCartItems.fulfilled, (state, action) => {
            state.isLoading = false
            state.items = action.payload
        })
        builder.addCase(getCartItems.rejected,  (state) => {
            state.isLoading = false
        })
    }
})

export const getCart = (state: RootState) => state.cart

export const { clearCart, increaseItem, decreaseItem, removeItem, calculateTotal } = cartSlice.actions

export default cartSlice.reducer

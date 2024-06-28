import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import clickedStateReducer from '../features/buttons/clickedStateSlice'
import cartReducer from '../features/cart/cartSlice'

// Creates a Redux store with three reducers: counter, clickedBtn, and cart
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    clickedBtn: clickedStateReducer,
    cart: cartReducer,
  },
});

// Defines the RootState type based on the store's state
export type RootState = ReturnType<typeof store.getState>
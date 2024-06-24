import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import clickedStateReducer from '../features/buttons/clickedStateSlice'
import cartReducer from '../features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    addProductBtn: clickedStateReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
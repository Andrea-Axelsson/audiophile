import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import addProductButtonReducer from '../features/buttons/addPruductButtonSlice'
import cartReducer from '../features/cart/cartSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    addProductBtn: addProductButtonReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
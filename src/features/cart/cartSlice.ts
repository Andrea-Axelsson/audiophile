import { PayloadAction, createSlice } from '@reduxjs/toolkit'

/* Define the CartItem interface */
interface CartItem {
  id: number,
  name: string,
  image: string,
  price: number,
  quantity: number
}

/* Define the CartState interface */
interface CartState {
  items: CartItem[],
  totalQuantity: number,
  totalSum: number,
}

/* Set the initial state for CartState */
const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalSum: 0,
}

/* Create a slice for managing cart state */
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    /* Add an item to the cart */
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingIndex = state.items.findIndex(item => item.id === action.payload.id)

      if (existingIndex >= 0) {
        state.items[existingIndex].quantity += action.payload.quantity
        state.totalSum += action.payload.price * action.payload.quantity
      } else {
        state.items.push(action.payload)
        state.totalSum += action.payload.price * action.payload.quantity
      }

      state.totalQuantity += action.payload.quantity

      console.log("Item added", action.payload)
    },
    /* Remove an item from the cart by id */
    removeItem: (state, action: PayloadAction<number>) => {
      const existingIndex = state.items.findIndex(item => item.id === action.payload);
      if (existingIndex >= 0) {
        const quantityToRemove = state.items[existingIndex].quantity;
        state.items.splice(existingIndex, 1);
        state.totalQuantity -= quantityToRemove;
      }
    },
    /* Increment the quantity of an item in the cart by id */
    incrementQuantity: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.items[index].quantity += 1;
        state.totalQuantity += 1
        state.totalSum += state.items[index].price
      }
    },
    /* Decrement the quantity of an item in the cart by id */
    decrementQuantity: (state, action: PayloadAction<number>) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        if (state.items[index].quantity > 1) {
          state.items[index].quantity -= 1;
          state.totalQuantity -= 1;
          state.totalSum -= state.items[index].price
        } else if (state.items[index].quantity === 1) {
          state.totalQuantity -= 1;
          state.totalSum -= state.items[index].price
          state.items.splice(index, 1);
        }
      }
    },
    /* Clear all items from the cart */
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalSum = 0;
    },
  }
})

/* Export the actions for use in components */
export const { addItem, removeItem, clearCart, incrementQuantity, decrementQuantity } = cartSlice.actions

/* Export the reducer to be included in the store */
export default cartSlice.reducer
import {PayloadAction, createSlice} from '@reduxjs/toolkit'

interface CartItem{
    id: number,
    name: string,
    image: string,
    price: number,
    quantity: number
}

interface CartState{
    items:CartItem[],
    totalQuantity: number,
    totalSum: number,
}

const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    totalSum: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItem: (state, action:PayloadAction<CartItem>) => {

            const existingIndex = state.items.findIndex(item => item.id === action.payload.id)

            if (existingIndex >= 0){
                state.items[existingIndex].quantity += action.payload.quantity
                state.totalSum += action.payload.price * action.payload.quantity
            }else{
                state.items.push(action.payload)
                state.totalSum += action.payload.price * action.payload.quantity
            }

            state.totalQuantity += action.payload.quantity
            

            
            console.log("Item added", action.payload)
        },
        removeItem: (state, action: PayloadAction<number>) => {
            const existingIndex = state.items.findIndex(item => item.id === action.payload);
            if (existingIndex >= 0) {
              const quantityToRemove = state.items[existingIndex].quantity;
              state.items.splice(existingIndex, 1);
              state.totalQuantity -= quantityToRemove;
            }
          },

          incrementQuantity: (state, action: PayloadAction<number>) => {
            const index = state.items.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                state.items[index].quantity += 1;
                state.totalQuantity += 1
                state.totalSum += state.items[index].price
            }
            
            
        },

        decrementQuantity: (state, action: PayloadAction<number>) => {
            const index = state.items.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                if (state.items[index].quantity > 1) {
                    state.items[index].quantity -= 1;
                    state.totalQuantity -= 1; 
                    state.totalSum -= state.items[index].price
                } else if (state.items[index].quantity === 1) {
                    state.totalQuantity -= 1;  
                    state.items.splice(index, 1); 
                }
            }
        },

          clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.totalSum = 0;
          },
    }
})

export const { addItem, removeItem, clearCart, incrementQuantity, decrementQuantity } = cartSlice.actions

export default cartSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

/* Define the CounterState interface */
interface CounterState {
  value: number
}

/* Set the initial state for CounterState */
const initialState: CounterState = {
  value: 1,
}

/* Create a slice for managing counter state */
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    /* Increment the counter value by 1 */
    increment: (state) => {
      state.value += 1
    },
    /* Decrement the counter value by 1 if it is greater than 1 */
    decrement: (state) => {
      if (state.value > 1) {
        state.value -= 1
      }
    },
    /* Reset the counter value to the initial state */
    reset: () => initialState,
  }
})

/* Export the actions for use in components */
export const { increment, decrement, reset } = counterSlice.actions

/* Export the reducer to be included in the store */
export default counterSlice.reducer
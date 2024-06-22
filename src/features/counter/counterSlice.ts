import {createSlice} from '@reduxjs/toolkit'

interface CounterState {
    value: number
}


const initialState: CounterState ={
    value: 1,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state) => {
            state.value += 1
        },

        decrement: (state) => {
            if (state.value > 1){
                state.value -= 1
            }
        },
        reset: () => initialState,
    }
})

export const {increment, decrement, reset} = counterSlice.actions

export default counterSlice.reducer
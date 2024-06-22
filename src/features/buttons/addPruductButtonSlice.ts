import {createSlice} from '@reduxjs/toolkit'

interface ButtonState{
    value: boolean
}

const initialState: ButtonState = {
    value: false,
}

export const addProductSlice = createSlice({
    name: 'addProductBtn',
    initialState,
    reducers:{
        clicked: (state) => {
            state.value = true
        },
        resetClicked: () => initialState,
    }

})

export const {clicked, resetClicked} = addProductSlice.actions
export default addProductSlice.reducer
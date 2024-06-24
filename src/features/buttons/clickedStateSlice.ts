import {createSlice} from '@reduxjs/toolkit'

interface ClickState{
    click1: boolean
    click2: boolean
}

const initialState: ClickState = {
    click1: false,
    click2: false,
}

export const clickSlice = createSlice({
    name: 'addProductBtn',
    initialState,
    reducers:{
        clicked1: (state) => {
            state.click1 = !state.click1
        },
        clicked2: (state) => {
            state.click2 = !state.click2
        },
        resetClicked: () => initialState,
    }

})

export const {clicked1, clicked2, resetClicked} = clickSlice.actions
export default clickSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

/* Define the ClickState interface */
interface ClickState {
  clickCart: boolean
  clickHamburger: boolean
  clickThankYouModal: boolean
}

/* Set the initial state for ClickState */
const initialState: ClickState = {
  clickCart: false,
  clickHamburger: false,
  clickThankYouModal: false,
}

/* Create a slice for managing click states */
export const clickSlice = createSlice({
  name: 'clickedBtn',
  initialState,
  reducers: {
    /* Toggle the clickCart state */
    clickedCart: (state) => {
      state.clickCart = !state.clickCart
    },
    /* Toggle the clickHamburger state */
    clickedHamburger: (state) => {
      state.clickHamburger = !state.clickHamburger
    },
    /* Toggle the clickThankYouModal state */
    clickedThankToyModal: (state) => {
      state.clickThankYouModal = !state.clickThankYouModal
    },
  }
})

/* Export the actions for use in components */
export const { clickedCart, clickedHamburger, clickedThankToyModal } = clickSlice.actions

/* Export the reducer to be included in the store */
export default clickSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const menuSlice = createSlice({
  name: 'Menu',
  initialState: {
    isMenuOpen: true
  },
  reducers: {
    isMenuOpen: (state) => { state.isMenuOpen = !state.isMenuOpen },
  }
})

export const { isMenuOpen } = menuSlice.actions
export default menuSlice.reducer
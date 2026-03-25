import { configureStore } from '@reduxjs/toolkit'
import isMenuOpen from './MenuSlice'

const store = configureStore({
  reducer: {
    Menu: isMenuOpen,
  }
})

export default store
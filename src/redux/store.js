import { configureStore } from '@reduxjs/toolkit'
import { filmsReducer } from './filmsSlice'

export const store = configureStore({
  reducer: {
    content: filmsReducer,
  },
})

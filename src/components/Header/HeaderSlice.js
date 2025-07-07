import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: 'Home',
}

const headerReducer = createSlice({
  name: 'header',
  initialState,
  reducers: {
    setHeaderTitle: (state, action) => {
      state.title = String(action.payload)
    },
  },
})

export default headerReducer.reducer

export const { setHeaderTitle } = headerReducer.actions

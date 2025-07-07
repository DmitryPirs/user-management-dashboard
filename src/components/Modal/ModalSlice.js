import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  visible: false,
  text: '',
  header: '',
}

const modalReducer = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setModalVisible: (state, action) => {
      state.visible = action.payload
    },
    setModalHeader: (state, action) => {
      state.header = action.payload
    },
    setModalText: (state, action) => {
      state.text = action.payload
    },
  },
})

export default modalReducer.reducer

export const { setModalVisible } = modalReducer.actions
export const { setModalText } = modalReducer.actions
export const { setModalHeader } = modalReducer.actions

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: '', // Title of the settings panel
  loading: false, // Loading state indicator
  error: null, // Error message if any
  visible: false, // Visibility of the panel
  panels: [], // Panels to be displayed in the settings
  item: null, // item on the settings panel
}

const SettingsPanelReducer = createSlice({
  name: 'settingsPanel',
  initialState,
  reducers: {
    setSettingsPanelItem: (state, action) => {
      state.item = action.payload
    },
    setSettingsPanelTitle: (state, action) => {
      state.title = action.payload
    },
    setSettingsPanelLoading: (state, action) => {
      state.loading = action.payload
    },
    setSettingsPanelError: (state, action) => {
      state.error = action.payload
    },
    setSettingsPanelVisible: (state, action) => {
      state.visible = action.payload
    },
    setSettingsPanelPanels: (state, action) => {
      state.panels = action.payload
    },
  },
})

export default SettingsPanelReducer.reducer
export const {
  setSettingsPanelItem,
  setSettingsPanelTitle,
  setSettingsPanelVisible,
  setSettingsPanelLoading,
  setSettingsPanelError,
  setSettingsPanelPanels,
} = SettingsPanelReducer.actions

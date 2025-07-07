import { combineReducers } from 'redux'
import userListReducer from './features/User/userListSlice'
import headerReducer from './components/Header/HeaderSlice'
import modalReducer from './components/Modal/ModalSlice'
import settingsPanelReducer from './features/SettingsPanel/SettingsPanelSlice'

const rootReducer = combineReducers({
  userList: userListReducer,
  header: headerReducer,
  modal: modalReducer,
  settingsPanel: settingsPanelReducer,
})

export default rootReducer

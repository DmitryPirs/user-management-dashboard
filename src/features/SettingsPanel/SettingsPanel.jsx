import TextInput from '../../components/TextInput/TextInput'
import Button from '../../components/Button/Button'
import { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CloseButton from '../../components/CloseButton/CloseButton'
import {
  setSettingsPanelItem,
  setSettingsPanelVisible,
} from './SettingsPanelSlice'

import { updateSelectedUser, updateUser } from '../User/userListSlice'

export default function SettingsPanel() {
  const dispatch = useDispatch()
  const titleSettingsPanel = useSelector(state => state.settingsPanel.title)
  const itemSettingsPanel = useSelector(state => state.settingsPanel.item)
  const visibleSettingsPanel = useSelector(state => state.settingsPanel.visible)
  const panelsSettingsPanel = useSelector(state => state.settingsPanel.panels)

  const [firstName, setFirstName] = useState(itemSettingsPanel?.firstName || '')
  const [email, setEmail] = useState(itemSettingsPanel?.email || '')

  useEffect(() => {
    setFirstName(itemSettingsPanel?.firstName || '')
    setEmail(itemSettingsPanel?.email || '')
  }, [itemSettingsPanel])

  let isUnchanged =
    firstName === (itemSettingsPanel?.firstName || '') &&
    email === (itemSettingsPanel?.email || '')

  function handleCloseButton() {
    dispatch(setSettingsPanelVisible(false))
  }

  const handleSaveDataUser = useCallback(
    (e, userId) => {
      e.preventDefault()
      dispatch(updateUser({ id: userId, firstName, email }))
      dispatch(updateSelectedUser({ id: userId, firstName, email }))
      dispatch(setSettingsPanelItem({ id: userId, firstName, email }))
    },
    [dispatch, firstName, email],
  )

  return (
    visibleSettingsPanel && (
      <div className="text-purple fixed top-22 right-0 z-300 flex h-screen w-100 flex-col items-center bg-white p-5 shadow-[-4px_0_6px_-1px_rgba(0,0,0,0.1),_-2px_0_4px_-2px_rgba(0,0,0,0.06)]">
        <CloseButton handleCloseButton={handleCloseButton} />

        <h4 className="my-2">{titleSettingsPanel}</h4>

        {panelsSettingsPanel.includes('userSettings') && (
          <>
            <form method="post" className="w-full text-left">
              <TextInput
                type="text"
                id={itemSettingsPanel.id + '_firstName'}
                name="firstName"
                placeholder="Input first name"
                labelText="First name"
                variant="full"
                value={firstName}
                onChange={e => {
                  setFirstName(e.target.value)
                }}
              />
              <TextInput
                type="email"
                id={itemSettingsPanel.id + '_email'}
                name="email"
                placeholder="Input email"
                labelText="Email"
                variant="full"
                value={email}
                onChange={e => {
                  setEmail(e.target.value)
                }}
              />

              <Button
                className="text-left"
                disabled={isUnchanged}
                onClick={e => {
                  handleSaveDataUser(e, itemSettingsPanel.id)
                }}
              >
                Save
              </Button>
            </form>
          </>
        )}
      </div>
    )
  )
}

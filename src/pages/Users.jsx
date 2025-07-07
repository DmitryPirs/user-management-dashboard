import Content from '../features/Content/Content'
import { Form } from 'react-router-dom'
import { useState, useEffect, useRef, useCallback } from 'react'
import TextInput from '../components/TextInput/TextInput'
import Button from '../components/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import UserItem from '../features/User/UserItem'
import {
  addUser,
  fetchUsers,
  removeSelectedUsersById,
  addSelectedUser,
  setSelectedUsers,
} from '../features/User/userListSlice'
import { setHeaderTitle } from '../components/Header/HeaderSlice'
import { FaPassport, FaTrash } from 'react-icons/fa'
import {
  setSettingsPanelItem,
  setSettingsPanelTitle,
  setSettingsPanelVisible,
  setSettingsPanelPanels,
} from '../features/SettingsPanel/SettingsPanelSlice'

export default function Users() {
  const dispatch = useDispatch()
  const logUsers = useSelector(state => state.userList.users)
  const selectedUsers = useSelector(state => state.userList.selectedUsers)
  const currentUser = useSelector(state => state.settingsPanel.item)

  useEffect(() => {
    dispatch(setHeaderTitle('Users'))
  }, [dispatch])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [variantTextInputName, setVariantTextInputName] = useState('default')
  const [variantTextInputEmail, setVariantTextInputEmail] = useState('default')
  const inputNameRef = useRef(null)
  const inputEmailRef = useRef(null)

  const selectedUsersRef = useRef(selectedUsers)
  useEffect(() => {
    selectedUsersRef.current = selectedUsers
  }, [selectedUsers])

  const focusNameInput = () => {
    if (inputNameRef.current) {
      inputNameRef.current.focus()
    }
  }
  const focusEmailInput = () => {
    if (inputEmailRef.current) {
      inputEmailRef.current.focus()
    }
  }

  const handleSelectUser = useCallback(
    userId => {
      const userToAdd = logUsers.find(user => user.id === userId)
      if (!userToAdd) return

      if (selectedUsersRef.current.some(user => user.id === userId)) return

      dispatch(addSelectedUser(userToAdd))
    },
    [logUsers, dispatch],
  )

  function handleAddUser(e) {
    e.preventDefault()

    if (!email) {
      setVariantTextInputEmail('default-error')
      focusEmailInput()
    }
    if (!name) {
      setVariantTextInputName('default-error')
      focusNameInput()
    }

    if (email && name) {
      dispatch(addUser({ id: Date.now(), firstName: name, email: email }))
      setName('')
      setEmail('')
    }
  }
  function handleDeleteSelectedUser(e, userId) {
    e.preventDefault()
    {
      currentUser &&
        userId === currentUser.id &&
        dispatch(setSettingsPanelVisible(false))
    }
    dispatch(removeSelectedUsersById(userId))
    setSelectedUsers(prevUsers => prevUsers.filter(user => user.id !== userId))
  }

  return (
    <>
      <Content>
        <div className="mt-4 mb-12 flex gap-6">
          <div className="w-1/3 rounded-2xl bg-white p-6">
            <Form>
              <TextInput
                ref={inputNameRef}
                type="text"
                id="name"
                name="name"
                placeholder="Input name of user"
                value={name}
                variant={variantTextInputName}
                onChange={e => {
                  {
                    e.target.value && setVariantTextInputName('default')
                  }
                  setName(e.target.value)
                }}
              />
              <TextInput
                ref={inputEmailRef}
                type="email"
                id="email"
                name="email"
                variant={variantTextInputEmail}
                placeholder="Input email"
                onChange={e => {
                  {
                    e.target.value && setVariantTextInputEmail('default')
                    setEmail(e.target.value)
                  }
                }}
                value={email}
              />
              <div className="flex gap-2">
                <Button
                  onClick={e => {
                    handleAddUser(e)
                  }}
                >
                  Add user
                </Button>
                <Button
                  onClick={() => {
                    dispatch(fetchUsers())
                    dispatch(setSelectedUsers([]))
                  }}
                >
                  Fetch users
                </Button>
              </div>
            </Form>
            <div>
              {selectedUsers.length > 0 && (
                <h2 className="mt-4 mb-4 font-bold">Selected users:</h2>
              )}
              {selectedUsers.length > 0 &&
                selectedUsers.map(user => (
                  <div key={user.id} className="relative mb-10 flex">
                    <div className="block">
                      <p className="font-semibold">{user.firstName}</p>
                      <p>{user.email}</p>

                      <div className="flex">
                        <Button
                          tooltip={'Details'}
                          onClick={() => {
                            dispatch(setSettingsPanelItem(user))
                            dispatch(setSettingsPanelTitle('User settings'))
                            dispatch(setSettingsPanelPanels('userSettings'))
                            dispatch(setSettingsPanelVisible(true))
                          }}
                        >
                          <FaPassport />
                        </Button>
                        <Button
                          isActive
                          onClick={e => handleDeleteSelectedUser(e, user.id)}
                          tooltip={'Delete user'}
                        >
                          <FaTrash />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="w-2/3 rounded-2xl bg-white p-6">
            <h2 className="mb-4 font-bold">List of users:</h2>
            {Array.isArray(logUsers) &&
              logUsers.length > 0 &&
              logUsers.map(user => (
                <UserItem
                  key={user.id}
                  user={user}
                  onSelect={handleSelectUser}
                />
              ))}
          </div>
        </div>
      </Content>
    </>
  )
}

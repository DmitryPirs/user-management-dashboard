import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  selectedUsers: [],
  loading: false,
  error: null,
}

export const fetchUsers = createAsyncThunk(
  'userList/fetchData',
  async (_, { rejectWithValue }) => {
    // _ - argument which I can pass to the function dispatch(fetchUsers(_))
    // {rejectWithValue} - contain many parameters, ex: state, dispatch
    try {
      const response = await fetch('https://dummyjson.com/users')
      if (!response.ok) {
        // throw new Error('Network response was not ok')
        return rejectWithValue(
          error.message || 'Something went wrong status: ' + response.status,
        )
      }
      const data = await response.json()
      return data.users
    } catch (error) {
      return rejectWithValue(
        error.message || 'Something went wrong status: ' + response.status,
      )
    }
  },
)

const userListReducer = createSlice({
  name: 'userList',
  initialState,
  reducers: {
    addSelectedUser: (state, action) => {
      state.selectedUsers.push(action.payload)
    },
    setSelectedUsers: (state, action) => {
      state.selectedUsers = action.payload
    },
    removeSelectedUsersById: (state, action) => {
      state.selectedUsers = state.selectedUsers.filter(
        user => user.id !== action.payload,
      )
    },

    updateSelectedUser(state, action) {
      const updatedUser = action.payload
      state.selectedUsers = state.selectedUsers.map(user =>
        user.id === updatedUser.id ? { ...user, ...updatedUser } : user,
      )
    },

    updateUser(state, action) {
      const updatedUser = action.payload
      state.users = state.users.map(user =>
        user.id === updatedUser.id ? { ...user, ...updatedUser } : user,
      )
    },

    addUser: (state, action) => {
      state.users.push(action.payload)
    },
    setUsers: (state, action) => {
      state.users = action.payload
    },
    fetchData: state => {
      state.loading = true
      state.error = null
    },
    fetchSuccess: (state, action) => {
      state.loading = false
      state.users = action.payload
    },
    fetchError: (state, action) => {
      state.loading = false
      state.error = action.error // from !res.ok
      // state.error = action.payload // from rejectWithValue
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUsers.pending, state => {
      state.loading = true
      state.error = null
    })
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false
      state.users = action.payload
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  },
})

export default userListReducer.reducer

export const {
  updateSelectedUser,
  updateUser,
  addUser,
  setUsers,
  setSelectedUsers,
  addSelectedUser,
  removeSelectedUsersById,
} = userListReducer.actions

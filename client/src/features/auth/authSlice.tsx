import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import type {User} from '../../services/auth'
import type {RootState} from '../../store'

type AuthState = {
  user: User | null
  refreshToken: string | null
  accessToken: string | null
}

const slice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    refreshToken: localStorage.getItem('refreshToken'),
    accessToken: localStorage.getItem('accessToken')
  } as AuthState,
  reducers: {
    setCredentials: (
      state,
      {payload: {user, refreshToken, accessToken}}: PayloadAction<{
        user: User;
        refreshToken: string,
        accessToken: string
      }>
    ) => {
      state.user = user
      state.refreshToken = refreshToken
      state.refreshToken = accessToken
      localStorage.setItem('refreshToken', refreshToken)
      localStorage.setItem('accessToken', accessToken)
    },

    setUser: (
      state,
      {payload: user}: PayloadAction<User>
    ) => {
      state.user = user
    }
  },
})

export const {setCredentials, setUser} = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.auth.user

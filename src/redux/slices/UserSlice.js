import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    userDetails: {
      id: '',
      userToken: '',
      email: '',
      username: '',
      password: '',
      name: {
        firstName: '',
        lastName: ''
      },
      isOnline: false,
      userBalance: 0,
    },
  },
  reducers: {
    // ? Register
    userRegister(state, action) {
      console.log(action.payload)
      state.loading = true;
    },
    userRegisterSuccess(state, action) {
      state.loading = false;
    },
    userRegisterFailure(state, action) {
      state.loading = false;
    },

    // ? Login
    userLogin(state, action) {
      state.loading = true;
    },
    userLoginSuccess(state, action) {
      console.log(action.payload)
      state.loading = false;
      state.userDetails.userToken = action.payload.token;
    },
    userLoginFailure(state, action) {
      state.loading = false;
    },

    // ? Get User Details
    getUserDetails(state, action) {
      state.loading = true;
    },
    getUserDetailsSuccess(state, action) {
      console.log(action.payload)

      state.loading = false;


    },
    getUserDetailsFailure(state, action) {
      state.loading = false;
    },




    authStatusCheck(state, action) {
    },
    userLogout(state, action) {
    },

  },
})

export const {
  userRegister,
  userRegisterSuccess,
  userRegisterFailure,

  userLogin,
  userLoginSuccess,
  userLoginFailure,


  authStatusCheck,
  userLogout
} = UserSlice.actions;

export default UserSlice.reducer
import { takeLatest, put, fork, call } from "redux-saga/effects";
import { createUsers, loginUsers, getUserById } from "../api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  userRegister,
  userRegisterSuccess,
  userRegisterFailure,

  userLogin,
  userLoginSuccess,
  userLoginFailure,

  authStatusCheck,
  userLogout
} from "../slices/UserSlice";

function* registerUser(action) {
  const data = action.payload;
  try {
    const response = yield call(createUsers, data);
    if (response.status === 200) {
      console.log(JSON.stringify(response, null, 1))
      yield put(userRegisterSuccess(response.data));
    } else {
      yield put(userRegisterFailure());
    }
  } catch (error) {
    yield put(userRegisterFailure());
    console.log(error);
  }
}


function* loginUser(action) {
  const data = action.payload;
  try {
    const response = yield call(loginUsers, data);
    console.log(JSON.stringify(response, null, 1))
    if (response.status === 200) {
      yield put(userLoginSuccess(response.data));
    } else {
      yield put(userLoginFailure());
    }
  } catch (error) {
    yield put(userLoginFailure());
    console.log(error);
  }
}



function* getUserDetails(action) {
  const id = action.payload.id;
  try {
    const response = yield call(getUserById, id);
    if (response.status === 200) {
      yield put(userRegisterSuccess(response.data));
    } else {
      yield put(userRegisterFailure());
    }
  } catch (error) {
    yield put(userRegisterFailure());
    console.log(error);
  }
}



function* userAuthCheck() {
  yield takeLatest(userRegister.type, registerUser);
  yield takeLatest(userLogin.type, loginUser);
  yield takeLatest(userRegister.type, getUserDetails);

}

export const userSagas = [fork(userAuthCheck)];


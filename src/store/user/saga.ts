import {loginUser} from '@api';
import {AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';
import {
  setErrorMessage,
  setStartLoading,
  setStopLoading,
  setUserInformation,
} from './action';
import {REQUEST_DATA_USER} from './types';

interface UserResponse {
  token: string;
}

function* signInRequest(action: any) {
  try {
    yield put(setStartLoading());
    const userResponse: AxiosResponse<UserResponse> = yield call(
      loginUser,
      action.payload,
    );
    yield put(
      setUserInformation({
        token: userResponse.data.token,
        username: action.payload.username,
      }),
    );
  } catch (error) {
    console.log({error});
    yield put(setStopLoading());
    yield put(setErrorMessage());
  }
}

function* userWatcher() {
  yield takeLatest(REQUEST_DATA_USER, signInRequest);
}

export {userWatcher};

import {loginUser} from '@api';
import {AxiosResponse} from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';
import {setUserInformation} from './action';
import {REQUEST_DATA_USER} from './types';

interface UserResponse {
  token: string;
}

function* signInRequest(action: any) {
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
}

function* userWatcher() {
  yield takeLatest(REQUEST_DATA_USER, signInRequest);
}

export {userWatcher};

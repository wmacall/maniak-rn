import {all} from 'redux-saga/effects';
import {userWatcher} from './saga';

function* rootSaga() {
  yield all([userWatcher()]);
}

export {rootSaga};

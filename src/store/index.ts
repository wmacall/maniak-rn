import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
import {userReducer} from './user/reducer';
import {rootSaga} from './user';
import {User} from './user/model';

const sagaMiddleware = createSagaMiddleware();

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
  blacklist: [],
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  compose(applyMiddleware(sagaMiddleware)),
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export interface AppState {
  user: {
    user: User;
  };
}

export {store, persistor};

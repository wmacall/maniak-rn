import i18n from '@i18n';
import {UserState} from './model';
import {
  REMOVE_MESSAGE,
  REMOVE_USER_DATA,
  REQUEST_DATA_USER,
  SET_ERROR_MESSAGE,
  SET_USER_DATA,
  START_LOADING,
  STOP_LOADING,
  UserActionTypes,
} from './types';

const INITIAL_STATE: UserState = {
  user: {
    token: null,
    username: '',
  },
  isLoading: false,
  error: '',
};

export const userReducer = (
  state = INITIAL_STATE,
  action: UserActionTypes,
): UserState => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        user: {
          ...state.user,
          token: `Bearer ${action.payload.token}`,
        },
      };
    case REQUEST_DATA_USER:
      return INITIAL_STATE;
    case REMOVE_USER_DATA:
      return INITIAL_STATE;
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case SET_ERROR_MESSAGE:
      return {
        ...state,
        error: i18n.t('error_message'),
      };
    case REMOVE_MESSAGE:
      return {
        ...state,
        error: '',
      };
    default:
      return state;
  }
};

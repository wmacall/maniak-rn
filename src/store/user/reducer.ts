import {UserState} from './model';
import {
  REMOVE_USER_DATA,
  REQUEST_DATA_USER,
  SET_USER_DATA,
  UserActionTypes,
} from './types';

const INITIAL_STATE: UserState = {
  user: {
    token: null,
    username: '',
  },
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
    default:
      return state;
  }
};

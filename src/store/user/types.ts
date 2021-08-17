import {User} from './model';

export const REQUEST_DATA_USER = 'REQUEST_DATA_USER';
export const SET_USER_DATA = 'SET_USER_DATA';
export const REMOVE_USER_DATA = 'REMOVE_USER_DATA';

interface SetUser {
  type: typeof SET_USER_DATA;
  payload: User;
}

interface RemoveUser {
  type: typeof REMOVE_USER_DATA;
}

interface RequestUser {
  type: typeof REQUEST_DATA_USER;
  payload: User;
}

export type UserActionTypes = SetUser | RemoveUser | RequestUser;

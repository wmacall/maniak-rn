import {User} from './model';

export const REQUEST_DATA_USER = 'REQUEST_DATA_USER';
export const SET_USER_DATA = 'SET_USER_DATA';
export const REMOVE_USER_DATA = 'REMOVE_USER_DATA';
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

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

interface StarLoading {
  type: typeof START_LOADING;
}
interface StopLoading {
  type: typeof STOP_LOADING;
}

interface SetMessage {
  type: typeof SET_ERROR_MESSAGE;
}

interface RemoveMessage {
  type: typeof REMOVE_MESSAGE;
}

export type UserActionTypes =
  | SetUser
  | RemoveUser
  | RequestUser
  | StarLoading
  | StopLoading
  | RemoveMessage
  | SetMessage;

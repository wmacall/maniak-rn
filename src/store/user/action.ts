import {
  REMOVE_MESSAGE,
  REQUEST_DATA_USER,
  SET_ERROR_MESSAGE,
  SET_USER_DATA,
  START_LOADING,
  STOP_LOADING,
} from './types';

export const setUserInformation = (payload: {
  token: string;
  username: string;
}) => ({
  type: SET_USER_DATA,
  payload,
});

export const setStartLoading = () => ({
  type: START_LOADING,
});

export const setStopLoading = () => ({
  type: STOP_LOADING,
});

export const setErrorMessage = () => ({
  type: SET_ERROR_MESSAGE,
});

export const removeMessage = () => ({
  type: REMOVE_MESSAGE,
});

export const requestUserData = (username: string, password: string) => ({
  type: REQUEST_DATA_USER,
  payload: {
    username,
    password,
  },
});

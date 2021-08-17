import {SET_USER_DATA} from './types';

export const setUserInformation = payload => ({
  type: SET_USER_DATA,
  payload,
});

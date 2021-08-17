import {dispatchRequest} from './instance';

export const loginUser = (data: {username: string; password: string}) =>
  dispatchRequest({
    method: 'post',
    url: 'login',
    data,
  });

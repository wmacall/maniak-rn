import axios from 'axios';
import {store} from 'store';

const state = async () => {
  return store.getState();
};

const instance = axios.create({
  baseURL: 'https://challenge.maniak.co/api/',
});

export const dispatchRequest = async (request: any) => {
  const _state = await state();
  instance.defaults.headers.common['Content-Type'] = 'application/json';
  instance.defaults.headers.common.Accept = 'application/json';
  if (_state?.user?.user?.token) {
    instance.defaults.headers.common.Authorization = _state.user.user.token;
  }

  console.log(instance.request);

  try {
    const resource = await instance(request);

    return Promise.resolve(resource);
  } catch (error) {
    return Promise.reject(error);
  }
};

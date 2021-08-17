import axios from 'axios';
import {store} from 'store';
import Config from 'react-native-config';

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
  instance.defaults.headers.common.Authorization = _state?.user?.user?.token;

  try {
    const resource = await instance(request);

    return Promise.resolve(resource);
  } catch (error) {
    return Promise.reject(error);
  }
};

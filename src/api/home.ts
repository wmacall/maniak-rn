import {dispatchRequest} from './instance';

export const getImagesList = () =>
  dispatchRequest({
    method: 'get',
    url: 'images',
  });

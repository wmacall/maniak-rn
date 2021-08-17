import React from 'react';
import {AuthRoutes, HomeRoutes} from '@routes';
import {store} from 'store';

export const Splash = () => {
  const {
    user: {
      user: {token},
    },
  } = store.getState();

  if (token) {
    return <HomeRoutes />;
  } else {
    return <AuthRoutes />;
  }
};

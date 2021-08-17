import React from 'react';
import {useSelector} from 'react-redux';
import {AuthRoutes, HomeRoutes} from '@routes';
import {AppState} from 'store';

export const Splash = () => {
  const {token} = useSelector(({user: {user}}: AppState) => ({
    token: user.token,
  }));

  if (token) {
    return <HomeRoutes />;
  } else {
    return <AuthRoutes />;
  }
};

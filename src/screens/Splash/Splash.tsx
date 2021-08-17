import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {AuthRoutes, HomeRoutes} from '@routes';
import {AppState} from 'store';
import RNBootSplash from 'react-native-bootsplash';

export const Splash = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  });

  const {token} = useSelector(({user: {user}}: AppState) => ({
    token: user.token,
  }));

  if (token) {
    return <HomeRoutes />;
  } else {
    return <AuthRoutes />;
  }
};

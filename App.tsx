import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthRoutes, HomeRoutes} from '@routes';

const App = () => (
  <NavigationContainer>
    <HomeRoutes />
  </NavigationContainer>
);

export default App;

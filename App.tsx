import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persistor} from './src/store';
import {Provider} from 'react-redux';

import './src/utils/networking';
import {Splash} from '@screens';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Splash />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

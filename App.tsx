import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persistor} from './src/store';
import {Provider} from 'react-redux';
import {Splash} from '@screens';
import {StatusBar} from 'react-native';
import {COLORS} from '@assets';
import './src/utils/networking';
import {Root} from 'native-base';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor={COLORS.WHITE} />
        <Root>
          <Splash />
        </Root>
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

export default App;

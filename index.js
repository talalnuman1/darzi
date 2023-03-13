import React from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './app/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import App from './App';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => Root);

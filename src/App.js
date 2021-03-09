import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './routes';
import {ContextProvider} from './hooks/index';

const App = () => {
  return (
    <ContextProvider>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </ContextProvider>
  );
};

export default App;

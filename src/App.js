import React from 'react';
import {Provider} from 'react-redux';
import MainScreen from './src/screens/MainScreen';

import {store} from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
};

export default App;

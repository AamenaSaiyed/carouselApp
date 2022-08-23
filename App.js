/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {Dashboard} from './Src/Screens';

const App = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Dashboard {...props} />
    </SafeAreaView>
  );
};

export default App;

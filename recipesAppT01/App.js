/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text } from 'react-native';

import { SafeAreaView } from 'react-native';
import Search from './src/components/Search';

import Home from './src/screens/home';

const App = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default App;

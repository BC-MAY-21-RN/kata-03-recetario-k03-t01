/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import HorizontalList from '../components/HorizontalList';
import Search from '../components/Search';

const Home = () => {
  return (
    <>
      <View>
        <Search />
      </View>
      <View>
        <HorizontalList />
      </View>
    </>
  )
};

export default Home;

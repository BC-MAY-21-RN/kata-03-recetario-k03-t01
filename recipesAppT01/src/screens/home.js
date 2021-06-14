/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import TrendingList from '../components/TrendingList';
import RecentList from '../components/RecentList';
import Search from '../components/Search';
import style from '../../assets/style';
import Icon from 'react-native-vector-icons/FontAwesome';


const Home = () => {
  return (
    <SafeAreaView style={style.home}>
      <View style={style.searchSection}>
        <Icon style={style.searchIcon} name="search" />
        <Search />
        <Icon style={style.searchIcon} name="microphone" />
      </View>
      <View>
        <TrendingList />
        <RecentList />
      </View>
    </SafeAreaView>
  );
};

export default Home;

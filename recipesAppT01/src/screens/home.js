/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import RecipeList from '../components/RecipeList';
import Search from '../components/Search';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from '../../assets/style';
import { recipes } from '../../assets/recipes.json';

const Home = function({ navigation }) {

  const trending = recipes.filter(recipe => recipe.section === 'trending');
  const recent = recipes.filter(recipe => recipe.section === 'recent');

  return (
    <SafeAreaView style={style.home}>
      <View style={style.searchSection}>
        <Icon style={style.searchIcon} name="search" />
        <Search />
        <Icon style={style.searchIcon} name="microphone" />
      </View>
      <View>
        <RecipeList
          navigation={navigation}
          recipes={trending}
          listTitle="TRENDING"
          cardSize="small"
        />
        <RecipeList
          navigation={navigation}
          recipes={recent}
          listTitle="RECENT"
          cardSize="big"
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, View } from 'react-native';
import RecipeList from '../components/RecipeList';
import Search from '../components/Search';
import style from '../../assets/style';
import { recipes } from '../../assets/recipes.json';

const Home = function({ navigation }) {

  const trending = recipes.filter(recipe => recipe.section === 'trending');
  const recent = recipes.filter(recipe => recipe.section === 'recent');

  return (
    <SafeAreaView style={style.home}>
      <Search/>
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

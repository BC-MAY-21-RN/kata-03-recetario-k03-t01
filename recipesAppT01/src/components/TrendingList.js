/* eslint-disable prettier/prettier */
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import TrendingItem from './TrendingItem';
import { recipes } from '../../assets/recipes.json';
import style from '../../assets/style';

const TrendingList = () => {

  const { trending } = recipes;

  return (
    <View>
      <Text style={style.listTitle}>TRENDING</Text>
      <FlatList
        data={trending}
        renderItem={({ item }) => <TrendingItem recipe={item} />}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
};

export default TrendingList;

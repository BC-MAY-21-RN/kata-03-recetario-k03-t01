/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image } from 'react-native';
import style from '../../assets/style'

const TrendingItem = ({ recipe }) => {
  return (
    <>
      <View>
        <Image
          source={{ uri: recipe.image }}
          style={style.trendingItemImage}
        />
        <Text style={style.trendingItemTitle}>{recipe.title}</Text>
      </View>
    </>
  );
};

export default TrendingItem;

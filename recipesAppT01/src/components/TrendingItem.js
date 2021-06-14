/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import style from '../../assets/style'

const TrendingItem = ({ recipe, navigation }) => {
  return (
    <>
      <TouchableOpacity
      onPress={() => navigation.navigate('Details',{recipe})}
      >
        <Image
          source={{ uri: recipe.image }}
          style={style.trendingItemImage}
        />
        <Text style={style.trendingItemTitle}>{recipe.title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default TrendingItem;

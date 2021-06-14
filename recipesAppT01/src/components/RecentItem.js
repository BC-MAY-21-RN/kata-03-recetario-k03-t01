/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image } from 'react-native';
import style from '../../assets/style';

const RecentItem = ({ recipe }) => {
  return (
    <>
      <View>
        <Image
          source={{ uri: recipe.image }}
          style={style.recentItemImage}
        />
        <Text style={style.recentItemTitle}>{recipe.title}</Text>
      </View>
    </>
  );
};

export default RecentItem;

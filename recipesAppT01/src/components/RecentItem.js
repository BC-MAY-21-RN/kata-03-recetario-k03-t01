/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import style from '../../assets/style';

const RecentItem = ({ recipe, navigation }) => {

  return (
    <>
      <TouchableOpacity
      onPress={() => navigation.navigate('Details',{recipe})}
      >
        <Image
          source={{ uri: recipe.image }}
          style={style.recentItemImage}
        />
        <Text style={style.recentItemTitle}>{recipe.title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default RecentItem;

/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, Image, TouchableOpacity } from 'react-native';
import style from '../../assets/style';

const RecipeItem = ({ recipe, navigation, cardSize }) => {

  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', { recipe })}
      >
        <Image
          source={{ uri: recipe.image }}
          style={cardSize === 'big' ? style.bigImage : style.smallImage}
        />
        <Text
          style={cardSize === 'big' ? style.bigTitle : style.smallTitle}
        >
          {recipe.title}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default RecipeItem;

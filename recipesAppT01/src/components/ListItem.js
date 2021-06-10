/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image } from 'react-native';

const ListItem = ({ recipe }) => {
  return (
    <>
      <View>
        <Image
          source={{ uri: recipe.image }}
          style={{
            width: 150,
            height: 150,
          }}
        />
        <Text>{recipe.title}</Text>
      </View>
    </>
  );
};

export default ListItem;

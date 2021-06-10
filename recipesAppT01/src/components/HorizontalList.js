/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import { FlatList, Text } from 'react-native';

import ListItem from './ListItem';

const HorizontalList = () => {

  const recipes = [
    {
      id: 1,
      image: 'https://img.bestrecipes.com.au/f4jy177E/w643-h428-cfill-q90/br/2020/11/beef-stew-960642-2.jpg',
      title: 'Beef stew',
      ingredients: [
        {
          ingredient: 'extra virgin olive oil',
          size: '2 tbsp',
        },
        {
          ingredient: 'gravy beef, cut into 4cm pieces',
          size: '800g',
        },
      ],
    },
    {
      id: 2,
      image: 'https://img.bestrecipes.com.au/f4jy177E/w643-h428-cfill-q90/br/2020/11/beef-stew-960642-2.jpg',
      title: 'Beef stew',
      ingredients: [
        {
          ingredient: 'extra virgin olive oil',
          size: '2 tbsp',
        },
        {
          ingredient: 'gravy beef, cut into 4cm pieces',
          size: '800g',
        },
      ],
    },
    {
      id: 3,
      image: 'https://img.bestrecipes.com.au/f4jy177E/w643-h428-cfill-q90/br/2020/11/beef-stew-960642-2.jpg',
      title: 'Beef stew',
      ingredients: [
        {
          ingredient: 'extra virgin olive oil',
          size: '2 tbsp',
        },
        {
          ingredient: 'gravy beef, cut into 4cm pieces',
          size: '800g',
        },
      ],
    },
  ];

  return (
    <View>
      <Text>TRENDING</Text>
      <FlatList
        data={recipes}
        renderItem={({ item }) => <ListItem recipe={item} />}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
};

export default HorizontalList;

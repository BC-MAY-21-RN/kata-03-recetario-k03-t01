/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import { FlatList, Text } from 'react-native';
import RecentItem from './RecentItem';
import style from '../../assets/style'

const RecentList = () => {

  const recipes = [
    {
      id: 1,
      image: 'https://img.bestrecipes.com.au/f4jy177E/w643-h428-cfill-q90/br/2020/11/beef-stew-960642-2.jpg',
      title: 'Beef stew',
      servings: 3,
      ingredients: [
        {
          ingredient: 'extra virgin olive oil',
          size: '2 tbsp',
        },
        {
          ingredient: 'gravy beef, cut into 4cm pieces',
          size: '800g',
        },
        {
          ingredient: 'brown onion, chopped',
          size: '1',
        },
        {
          ingredient: 'large carrots, thickly sliced',
          size: '2',
        },
        {
          ingredient: 'large celery stalks, thickly sliced',
          size: '2',
        },
        {
          ingredient: 'middle bacon rashers, chopped',
          size: '3',
        },
      ],
    },
    {
      id: 2,
      image: 'https://img.bestrecipes.com.au/aNAoZ1oa/w643-h428-cfill-q90/br/2020/11/easy-creamy-chicken-and-rice-960641-2.jpg',
      title: 'Creamy chicken and rice',
      servings: 4,
      ingredients: [
        {
          ingredient: 'chicken breasts (pounded 1/2-inch thin)',
          size: '4',
        },
        {
          ingredient: 'teaspoon fresh chopped parsley',
          size: '1',
        },
        {
          ingredient: 'cup milk (or half and half)',
          size: '1',
        },
        {
          ingredient: 'salt and freshly ground black pepper',
          size: 'to taste',
        },
        {
          ingredient: 'teaspoon each of dried thyme and dried rosemary',
          size: '1/2',
        },
        {
          ingredient: 'teaspoon cornstarch mixed with 1 tablespoon water , until smooth',
          size: '1',
        },
      ],
    },
    {
      id: 3,
      image: 'https://img.bestrecipes.com.au/z4HNrtLt/w643-h428-cfill-q90/br/2019/03/coconut-biscuits-950698-1.jpg',
      title: 'Coconut biscuits',
      servings: 10,
      ingredients: [
        {
          ingredient: 'desiccated coconut',
          size: '125g',
        },
        {
          ingredient: 'caster sugar',
          size: '225g',
        },
        {
          ingredient: 'medium sized-eggs (whisked)',
          size: '2',
        },
      ],
    },
    {
      id: 4,
      image: 'https://img.bestrecipes.com.au/FtLj1PdW/w643-h428-cfill-q90/br/2020/10/best-tuna-pasta-baked-960521-1.jpg',
      title: 'Tuna pasta',
      servings: 4,
      ingredients: [
        {
          ingredient: 'albacore tuna, drained',
          size: '2 cans',
        },
        {
          ingredient: 'tomato, cored, cut in half crosswise and squeezed of excess juice, chopped',
          size: '1',
        },
        {
          ingredient: 'kalamata olives, pitted and coarsely chopped',
          size: '1/4 cup',
        },
        {
          ingredient: 'red onion chopped',
          size: '1/4 cup',
        },
        {
          ingredient: 'parsley, chopped',
          size: '2 tablespoons',
        },
        {
          ingredient: 'capers, coarsely chopped',
          size: '1 tablespoon',
        },
        {
          ingredient: ' lemon juice',
          size: '2 teaspoons',
        },
      ],
    },
    {
      id: 5,
      image: 'https://img.bestrecipes.com.au/8oPb1yHr/w320-h320-cfill-q80/br/2018/11/slow-cooked-indian-madras-beef-curry-recipe-521268-1.jpg',
      title: 'Beef curry',
      servings: 6,
      ingredients: [
        {
          ingredient: 'diced braising steak',
          size: '500g',
        },
        {
          ingredient: 'butter',
          size: '1 tbsp',
        },
        {
          ingredient: 'crushed garlic cloves',
          size: '2',
        },
        {
          ingredient: 'ginger , finely grated',
          size: '1 piece',
        },
        {
          ingredient: 'hot chilli powder',
          size: '1/4 tsp',
        },
        {
          ingredient: 'turmeric',
          size: '1 tsp',
        },
        {
          ingredient: 'chopped tomatoes',
          size: '400g',
        },
      ],
    },
  ];

  return (
    <View>
      <Text style={style.listTitle}>RECENT</Text>
      <FlatList
        data={recipes}
        renderItem={({ item }) => <RecentItem recipe={item} />}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
};

export default RecentList;

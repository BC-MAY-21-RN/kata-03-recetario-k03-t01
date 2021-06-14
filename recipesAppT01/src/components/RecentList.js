/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import { FlatList, Text } from 'react-native';
import RecentItem from './RecentItem';
import { recipes } from '../../assets/recipes.json';
import style from '../../assets/style';

const RecentList = ({navigation}) => {

  const { recent } = recipes;

  return (
    <View>
      <Text style={style.listTitle}>RECENT</Text>
      <FlatList
        data={recent}
        renderItem={({ item }) => <RecentItem recipe={item} navigation={navigation}/>}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
};

export default RecentList;

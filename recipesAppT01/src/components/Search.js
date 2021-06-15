/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import style from '../../assets/style';

const Search = () => {

  const [search, setSearch] = useState('');
  const updateSearch = (text) => setSearch(text);

  return (
    <View style={style.searchSection}>
      <Icon style={style.searchIcon} name="search" />
      <TextInput 
        style={style.searchBar}
        placeholder="What do you want to eat?"
        placeholderTextColor= "#ffffff" onChangeText={updateSearch}
      />
      <Icon style={style.searchIcon} name="mic" />
    </View>
  );
};

export default Search;


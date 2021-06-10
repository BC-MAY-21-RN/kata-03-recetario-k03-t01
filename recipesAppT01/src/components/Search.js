/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { TextInput } from 'react-native';
import style from '../../assets/style'

const Search = () => {

  const [search, setSearch] = useState('');

  const updateSearch = (text) => setSearch(text);

  return (
      <TextInput 
        style={style.searchBar}
        placeholder="What do you want to eat?"
        placeholderTextColor= "#ffffff" 
        onChangeText={updateSearch}
      />
  );
};

export default Search;


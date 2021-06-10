/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { TextInput } from 'react-native';

const Search = () => {

  const [search, setSearch] = useState('');

  const updateSearch = (text) => setSearch(text);

  return (
    <TextInput
      placeholder="What do you want to eat?"
      onChangeText={updateSearch}
    />
  );
};

export default Search;


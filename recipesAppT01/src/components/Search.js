/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';

const Search = () => {

  const [search, setSearch] = useState('');

  const updateSearch = (text) => setSearch(text);

  return (
    <SearchBar
      placeholder="What do you want to eat?"
      onChangeText={updateSearch}
      value={search}
    />
  )
}

export default Search;


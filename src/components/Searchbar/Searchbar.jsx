import { useState } from 'react';
import { SearchBar, SearchForm, Button, ButtonLabel, Input } from './Searchbar.styled';
import searchIcon from 'images/search.png';

export const Searchbar = ({ onSubmit }) => {
  const [searchField, setSearchField] = useState('');

  const onChangeHandler = e => setSearchField(e.currentTarget.value);

  const onSearch = e => {
    e.preventDefault();
    onSubmit(e.target.searchField.value);
    setSearchField('');
  };

  return (
    <SearchBar>
      <SearchForm onSubmit={onSearch}>
        <Button type="submit">
          <img src={searchIcon} width="30" height="30" alt="Search icon" />
          <ButtonLabel>Search</ButtonLabel>
        </Button>

        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onChangeHandler}
          name="searchField"
          value={searchField}
        />
      </SearchForm>
    </SearchBar>
  );
};

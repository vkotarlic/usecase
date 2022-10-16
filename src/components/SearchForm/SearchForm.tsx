import React, { useState } from 'react';
import Button from 'components/core/Button/Button';
import TextInput from 'components/core/Input/TextInput';
import { ReactComponent as SearchIcon } from 'assets/SearchIcon.svg';
import { ReactComponent as ChevronDown } from 'assets/ChevronDown.svg';
import './SearchFrom.scss';

const SearchFrom = () => {
  const [advancedSearch, setAdvancedSearch] = useState(false);

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value);
  };

  const handleClick = () => {
    console.log('Click');
  };

  const toggleAdvancedSearch = () => {
    setAdvancedSearch(!advancedSearch);
  };

  const renderAdvancedSearch = () => {
    return (
      <section>
        <span>Test</span>
      </section>
    );
  };

  return (
    <form className="c-search">
      <section className="c-search__base">
        <TextInput
          label="Search by:"
          name="searchBy"
          placeholder="Search by ..."
          onChange={handleInput}
        />
        <div className="c-search__checkbox-group">
          <label className="c-search__checkbox-label" htmlFor="name">
            Name
          </label>
          <input className="c-search__checkbox" name="name" type="checkbox" />
          <label className="c-search__checkbox-label" htmlFor="description">
            Description
          </label>
          <input className="c-search__checkbox" name="description" type="checkbox" />
          <label className="c-search__checkbox-label" htmlFor="readme">
            Readme
          </label>
          <input className="c-search__checkbox" name="readme" type="checkbox" />
        </div>
        <div>
          <Button
            label={<SearchIcon width={18} height={18} />}
            style="primary"
            type="submit"
            onClick={handleClick}
          />
          <Button
            label={<ChevronDown width={18} height={18} />}
            style="secondary"
            type="button"
            onClick={toggleAdvancedSearch}
          />
        </div>
      </section>
      {advancedSearch && renderAdvancedSearch()}
    </form>
  );
};

export default SearchFrom;

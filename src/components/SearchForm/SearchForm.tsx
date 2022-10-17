import React, { useState } from 'react';
import { QueryData } from 'models/QueryData';
import Button from 'components/core/Button/Button';
import TextInput from 'components/core/Input/TextInput';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { QueryState } from 'state/state';
import { ReactComponent as SearchIcon } from 'assets/SearchIcon.svg';
import { ReactComponent as ChevronDown } from 'assets/ChevronDown.svg';
import './SearchFrom.scss';

const SearchFrom = () => {
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const setQueryState = useSetRecoilState(QueryState);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<QueryData>();
  const onSubmit: SubmitHandler<QueryData> = (data) => setQueryState(data);

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
    <form className="c-search" onSubmit={handleSubmit(onSubmit)}>
      <section className="c-search__base">
        <TextInput
          label="Search by:"
          placeholder="Search by ..."
          error={errors.searchBy?.type === 'minLength'}
          {...register('searchBy', { minLength: 3 })}
        />
        <div className="c-search__checkbox-group">
          <label className="c-search__checkbox-label" htmlFor="name">
            Name
          </label>
          <input
            className="c-search__checkbox"
            type="checkbox"
            defaultChecked
            {...register('name')}
          />
          <label className="c-search__checkbox-label" htmlFor="description">
            Description
          </label>
          <input className="c-search__checkbox" {...register('description')} type="checkbox" />
          <label className="c-search__checkbox-label" htmlFor="readme">
            Readme
          </label>
          <input className="c-search__checkbox" {...register('readme')} type="checkbox" />
        </div>
        <div>
          <Button label={<SearchIcon width={18} height={18} />} style="primary" type="submit" />
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

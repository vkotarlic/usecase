import React, { useState } from 'react';
import { QueryData } from 'models/QueryData';
import Button from 'components/core/Button/Button';
import TextInput from 'components/core/Input/TextInput';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { QueryState } from 'state/state';
import { ReactComponent as SearchIcon } from 'assets/SearchIcon.svg';
import { ReactComponent as ChevronDown } from 'assets/ChevronDown.svg';
import Select from 'react-select';
import './SearchFrom.scss';
import { languages } from 'utils/Languages';
import { topics } from 'utils/Topics';

const SearchFrom = () => {
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const setQueryState = useSetRecoilState(QueryState);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<QueryData>();
  const onSubmit: SubmitHandler<QueryData> = (data) => setQueryState(data);

  const toggleAdvancedSearch = () => {
    setAdvancedSearch(!advancedSearch);
  };

  const resetValues: QueryData = {
    searchBy: '',
    userName: '',
    name: true,
    description: false,
    readme: false,
    languages: [],
    organization: '',
    topics: [],
    starsComparison: undefined,
    starsNumber: undefined,
    sizeComparison: undefined,
    sizeNumber: undefined
  };

  const renderAdvancedSearch = () => {
    return (
      <section className="c-search__advanced">
        <div className="c-search__advanced-row">
          <div className="c-search__advanced-col">
            <TextInput
              label="User name"
              placeholder="Please enter user name"
              {...register('userName', { minLength: 3 })}
            />
            <TextInput
              label="Organization"
              placeholder="Please enter organization name"
              {...register('organization', { minLength: 3 })}
            />
            <Controller
              {...register('languages')}
              control={control}
              defaultValue={undefined}
              render={({ field: { onChange, ref } }) => (
                <Select
                  className="c-search__select"
                  placeholder="Please select language"
                  ref={ref}
                  onChange={(val) => onChange(val?.map((c) => c.value))}
                  options={languages}
                  isMulti
                />
              )}
            />
            <Controller
              {...register('topics')}
              control={control}
              render={({ field: { onChange, ref } }) => (
                <Select
                  className="c-search__select"
                  placeholder="Please select topic"
                  ref={ref}
                  onChange={(val) => onChange(val?.map((c) => c.value))}
                  options={topics}
                  isMulti
                />
              )}
            />
          </div>
          <div className="c-search-advanced-col">
            <div className="c-search__radio-group">
              <div className="c-search__advanced-row">
                <label className="c-search__advanced-radio-label" htmlFor="starsNumber">
                  Stars
                </label>
                <input
                  className="c-search__advanced-radio-input"
                  type="radio"
                  id="equal"
                  {...register('starsComparison')}
                  value=""
                />
                <label htmlFor="equal">Equal</label>
                <input
                  className="c-search__advanced-radio-input"
                  type="radio"
                  id="greaterThen"
                  {...register('starsComparison')}
                  value=">"
                />
                <label htmlFor="greaterThen">Greater then</label>
                <input
                  className="c-search__advanced-radio-input"
                  type="radio"
                  id="lessThen"
                  {...register('starsComparison')}
                  value="<"
                />
                <label htmlFor="lessThen">Less</label>
              </div>
              <input
                placeholder="Enter stars count"
                min={0}
                className="c-search__advanced-input"
                {...register('starsNumber', { min: 0 })}
                type="number"
              />
            </div>

            <div className="c-search__radio-group">
              <div className="c-search__advanced-row">
                <label className="c-search__advanced-radio-label" htmlFor="sizeNumber">
                  Size
                </label>
                <input
                  className="c-search__advanced-radio-input"
                  type="radio"
                  id="equal"
                  {...register('sizeComparison')}
                  value=""
                />
                <label htmlFor="equal">Equal</label>
                <input
                  className="c-search__advanced-radio-input"
                  type="radio"
                  id="greaterThen"
                  {...register('sizeComparison')}
                  value=">"
                />
                <label htmlFor="greaterThen">Greater then</label>
                <input
                  className="c-search__advanced-radio-input"
                  type="radio"
                  id="lessThen"
                  {...register('sizeComparison')}
                  value="<"
                />
                <label htmlFor="lessThen">Less</label>
              </div>
              <input
                placeholder="Enter size number"
                min={0}
                className="c-search__advanced-input"
                {...register('sizeNumber', { min: 0 })}
                type="number"
              />
            </div>
          </div>
          <div className="c-search__advanced-col">
            <div className="c-search__radio-group">
              <div className="c-search__advanced-row">
                <label className="c-search__advanced-radio-label" htmlFor="date">
                  Date
                </label>
                <input
                  className="c-search__advanced-radio-input"
                  type="radio"
                  id="lessThen"
                  {...register('dateComparison')}
                  value="<"
                />
                <label htmlFor="lessThen">before</label>
                <input
                  className="c-search__advanced-radio-input"
                  type="radio"
                  id="before"
                  {...register('dateComparison')}
                  value="<="
                />
                <label htmlFor="before">on or before</label>
                <input
                  className="c-search__advanced-radio-input"
                  type="radio"
                  id="greaterThen"
                  {...register('dateComparison')}
                  value=">="
                />
                <label htmlFor="greaterThen">on or after</label>
                <input
                  className="c-search__advanced-radio-input"
                  type="radio"
                  id="lessThen"
                  {...register('dateComparison')}
                  value=">"
                />
                <label htmlFor="lessThen">after</label>
              </div>
              <input className="c-search__advanced-input" {...register('date')} type="date" />
            </div>
          </div>
        </div>
        <div>
          <Button label="Reset" style="primary" onClick={() => reset(resetValues)} />
        </div>
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

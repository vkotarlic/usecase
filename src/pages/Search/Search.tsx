import React from 'react';
import SearchFrom from 'components/SearchForm/SearchForm';
import { useRecoilValue } from 'recoil';
import { QueryState } from 'state/state';
import { useAxios } from 'hooks/useAxios';
import Loader from 'components/core/Loader/Loader';
import './Search.scss';
import SearchResult from 'components/SearchResult/SearchResult';

const Search = () => {
  const queryState = useRecoilValue(QueryState);
  const { response, loading } = useAxios({ method: 'get', query: queryState });

  return (
    <div>
      <SearchFrom />
      <div className="c-search-results">
        {loading && <Loader />}
        {response.length > 0 &&
          response.map((result) => <SearchResult key={result.id} {...result} />)}
      </div>
    </div>
  );
};

export default Search;

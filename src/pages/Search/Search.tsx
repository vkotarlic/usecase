import React from 'react';
import SearchFrom from 'components/SearchForm/SearchForm';
import { useRecoilState } from 'recoil';
import { QueryState } from 'state/state';
import { useAxios } from 'hooks/useAxios';
import Loader from 'components/core/Loader/Loader';
import './Search.scss';
import SearchResult from 'components/SearchResult/SearchResult';
import Select from 'react-select';
import Pagination from 'components/core/Pagination/Pagination';
import { sortValues } from 'utils/SortValues';
import { orderValues } from 'utils/OrderValues';

const Search = () => {
  const [queryState, setQueryState] = useRecoilState(QueryState);
  const { response, loading, totalCount } = useAxios({
    method: 'get',
    query: queryState,
    pushToHistory: true
  });

  return (
    <div>
      <SearchFrom />
      <div className="c-search-results">
        <div className="c-search-results__actions">
          <Select
            placeholder="Sort by"
            options={sortValues}
            onChange={(selectedItem) =>
              setQueryState({ ...queryState, sortBy: selectedItem?.value })
            }
          />
          <Select
            placeholder="Order by"
            options={orderValues}
            onChange={(selectedItem) =>
              setQueryState({ ...queryState, orderBy: selectedItem?.value })
            }
          />
        </div>
        {loading && <Loader />}
        {response.length > 0 &&
          response.map((result) => <SearchResult key={result.id} searchResult={result} />)}
      </div>
      {totalCount && totalCount > 0 && (
        <div className="c-search-results__pagination-container">
          <Pagination totalResults={totalCount} />
        </div>
      )}
    </div>
  );
};

export default Search;

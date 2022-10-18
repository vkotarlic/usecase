import React, { useState } from 'react';
import Loader from 'components/core/Loader/Loader';
import QueryCard from 'components/QueryCard/QueryCard';
import SearchResult from 'components/SearchResult/SearchResult';
import { useAxios } from 'hooks/useAxios';
import { QueryData } from 'models/QueryData';
import { useRecoilValue } from 'recoil';
import { HistoryState } from 'state/state';
import './History.scss';
import { emptyQueryData } from 'utils/EmptyQueryData';

const History = () => {
  const historyState = useRecoilValue(HistoryState);
  const [selectedQuery, setSelectedQuery] = useState<QueryData>(emptyQueryData);

  const { response, loading } = useAxios({ method: 'get', query: selectedQuery });

  const handleSelectQuery = (query: QueryData) => {
    setSelectedQuery(query);
  };

  return (
    <div className="c-history">
      <div className="c-history__queries">
        <h3>Old queries</h3>
        {historyState.map((oldQuery, i) => (
          <QueryCard key={i} query={oldQuery} onClick={() => handleSelectQuery(oldQuery)} />
        ))}
      </div>
      <div className="c-history__search">
        {loading && <Loader />}
        {response.length > 0 &&
          response.map((result) => (
            <SearchResult key={result.id} searchResult={result} size="large" />
          ))}
      </div>
    </div>
  );
};

export default History;

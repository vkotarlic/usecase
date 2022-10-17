import { useState, useEffect } from 'react';
import axios from 'axios';
import { QueryData } from 'models/QueryData';
import { queryBuilder } from 'utils/QueryBuilder';
import { SearchResponse } from 'models/SearchResponse';
import { useRecoilState } from 'recoil';
import { HistoryState } from 'state/state';

interface Payload {
  method: 'get' | 'post' | 'put' | 'delete';
  query: QueryData;
}

export const useAxios = ({ method, query }: Payload) => {
  const [response, setResponse] = useState<SearchResponse[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [historyState, setHistoryState] = useRecoilState(HistoryState);

  const baseUrl = process.env.REACT_APP_URL || '';

  const fetchData = () => {
    setLoading(true);
    axios[method](`${baseUrl}/search/repositories?q=${queryBuilder(query)}`)
      .then((res) => {
        setResponse(res.data.items);
        setHistoryState([...historyState, query]);
      })
      .catch((er) => setError(er))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (query.searchBy !== '') fetchData();
  }, [method, query]);

  return { response, error, loading };
};

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
  pushToHistory?: boolean;
}

export const useAxios = ({ method, query, pushToHistory }: Payload) => {
  const [response, setResponse] = useState<SearchResponse[]>([]);
  const [totalCount, setTotalCount] = useState();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [historyState, setHistoryState] = useRecoilState(HistoryState);

  const baseUrl = process.env.REACT_APP_URL || '';
  const pageCount = process.env.REACT_APP_PAGE_COUNT;

  const fetchData = () => {
    setLoading(true);
    axios[method](`${baseUrl}/search/repositories?q=${queryBuilder(query)}`, {
      params: {
        page: query.page,
        per_page: pageCount,
        sort: query.sortBy || 'default',
        order: query.orderBy
      }
    })
      .then((res) => {
        setResponse(res.data.items);
        setTotalCount(res.data.total_count);
        if (pushToHistory) setHistoryState([...historyState, query]);
      })
      .catch((er) => setError(er))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (query.searchBy !== '') fetchData();
  }, [method, query]);

  return { response, totalCount, error, loading };
};

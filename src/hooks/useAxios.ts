import { useState, useEffect } from 'react';
import axios from 'axios';
import { QueryData } from 'models/QueryData';
import { queryBuilder } from 'utils/QueryBuilder';

interface Payload {
  method: 'get' | 'post' | 'put' | 'delete';
  query: QueryData;
}

interface Response {
  id: number;
  url: string;
  language: string;
}

export const useAxios = ({ method, query }: Payload) => {
  const [response, setResponse] = useState<Response[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const baseUrl = process.env.REACT_APP_URL || '';

  const fetchData = () => {
    setLoading(true);
    axios[method](`${baseUrl}/search/repositories?q=${queryBuilder(query)}`)
      .then((res) => setResponse(res.data.items))
      .catch((er) => setError(er))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    if (query.searchBy !== '') fetchData();
  }, [method, query]);

  return { response, error, loading };
};

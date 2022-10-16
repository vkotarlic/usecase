import { useState, useEffect } from 'react';
import axios from 'axios';

interface Payload {
  method: 'get' | 'post' | 'put' | 'delete';
  searchBy: string;
  query?: string;
}

export const useAxios = ({ method, searchBy, query }: Payload) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const baseUrl = process.env.REACT_APP_URL || '';

  const fetchData = () => {
    axios[method](`${baseUrl}/search/repositories?q=${searchBy}${query || ''}`)
      .then((res) => setResponse(res.data))
      .catch((er) => setError(er))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, [method, searchBy, query]);

  return { response, error, loading };
};

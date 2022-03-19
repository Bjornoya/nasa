import { useState } from 'react';

export default (apiFunc) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    try {
      const response = await apiFunc(...args);
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message || 'Unexpected Error!');
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    setData,
    error,
    loading,
    request,
  };
};

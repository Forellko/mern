import { useCallback, useState } from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (url, method = 'GET', body = {}, headers = {}) => {
      setLoading(true);
      try {
        const response = await fetch(url, {
          method,
          body: JSON.stringify(body),
          headers,
        });
        const data = await response.json();

        if (!response.ok) throw Error('Something wrong');

        setLoading(false);

        return data;
      } catch (error) {
        setLoading(false);
        setError(error.message);
        throw error;
      }
    },
    []
  );

  const clearError = () => setError(null);

  return { loading, request, error, clearError };
};

import React, { useCallback, useEffect, useState } from "react";
export const useHook = (url) => {
  const [hotels, setHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // console.log(url);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const json = await response.json();
        setIsLoading(false);
        setHotels(json);
        setError(null);
      } catch (err) {
        setIsLoading(false);
        setError(err.message);
      }

      // console.log(json);
    };
    fetchData();
  }, [url]);

  return { hotels, isLoading, error };
};

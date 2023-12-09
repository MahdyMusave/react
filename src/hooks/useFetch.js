import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoad, setIsLoad] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async (url) => {
      try {
        setIsLoad(true);
        const response = await fetch(url);
        const json = await response.json();

        setData(json);
        setIsLoad(false);
        setError(null);
      } catch (err) {
        setIsLoad(false);
        // setError(err.message);
        console.log(err);
      }
    };

    fetchData(url);
  }, [url]);
  return { data, isLoad, error };
};

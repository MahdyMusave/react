import React, { useCallback, useEffect, useState } from "react";
export const useHook = (url) => {
  const [hotels, setHotels] = useState([]);

  // console.log(url);
  useEffect(() => {
    
    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      // console.log(json);
      setHotels(json);
    };
    fetchData();
  }, [url]);

  return { hotels };
};

import React, { useEffect, useState } from "react";
import axios from "axios";

const useGet = (url, options = {}) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(url);
        // const json = await response.json();
        setResponse(res);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    getData();
  }, [url]);
  return { response, error, isLoading };
};

export default useGet;

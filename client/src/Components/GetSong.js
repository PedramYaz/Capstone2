import axios from "axios";
import React, { useState, useEffect } from "react";

function GetSong() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetchResults();
  }, [results]);

  const fetchResults = async (endpoint, data = {}, method = "get") => {
    console.debug("API Call:", endpoint, data, method);
    const url = "https://api.musixmatch.com/ws/1.1/";
    const headers = {
      chart_name: "top",
      apikey: "652b4d81c154cc02257fae7e1febeb19",
      page: 1,
      page_size: 100,
      country: "us",
      f_has_lyrics: 1,
    };

    const params = method === "get" ? data : {};

    const response = await axios({ url, method, data, params, headers });
    setResults(response.data);
  };
  return (
    <div>
      <h4>{results}</h4>
      {/* <p>{results.artist_name}</p> */}
    </div>
  );
}

export default GetSong;

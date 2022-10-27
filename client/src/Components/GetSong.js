import React, { useState, useEffect } from "react";
import useGet from "../hooks/useGet";
// import axios from "axios";

const GetSong = () => {
  let url = "http://localhost:3001/songs/choice-of-the-day";
  const data = useGet(url);
  if (data.isLoading) {
    return <div>Loading...</div>;
  }
  if (data.error) {
    return <div>Sorry, something went wrong :(</div>;
  }

  return (
    <div>
      <h3>Song Name: {JSON.stringify(data.response.data.track_name)}</h3>
      <h3>Artist Name: {JSON.stringify(data.response.data.artist_name)}</h3>
    </div>
  );
};

export default GetSong;

// ! ATTEMPT #1 (it works, but the above one uses a hook)
// function GetSong() {
//    const [results, setResults] = useState({});

//    useEffect(() => {
//      axios
//        .get(url)
//        .then((response) => {
//          setResults(response.data);
//          console.log(response);
//        })
//        .catch((err) => {
//          return err;
//        });
//    }, []);

//      return (
//        <div>
//          <h3>{JSON.stringify(results.track_name)}</h3>
//          <h3>{JSON.stringify(results.artist_name)}</h3>
//          {/* <p>{JSON.stringify(results)}</p> */}
//        </div>
//      );
//  }

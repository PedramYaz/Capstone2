import React, { useEffect, useState } from "react";
import "./SongSearchForm.css";
import Autocomplete from "./Autocomplete";
import axios from "axios";

const initialState = "";
// let officialInfo = [];

function SongSearchForm(props) {
  const [searchTerm, setSearchTerm] = useState(initialState);
  const [info, setInfo] = useState([]);

  function handleSubmit(evt) {
    setSearchTerm(initialState);
  }

  useEffect(() => {
    let url = "http://localhost:3001/songs/auto-complete";
    axios
      .get(url)
      .then((response) => {
        setInfo(response);
        console.log("set info");
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function submit(evt) {
    let guess = searchTerm.slice(0, searchTerm.indexOf(" -"));
    let answer = JSON.parse(localStorage.song_info);

    if (guess === answer.track_name) {
      localStorage.setItem("clicks", 7);
    } else {
      evt.preventDefault();
      setSearchTerm(initialState);
      props.setCount(props.count + 1);
    }
  }

  function skip(evt) {
    evt.preventDefault();
    props.setCount(props.count + 1);
  }
  useEffect(() => {
    localStorage.setItem("clicks", props.count);
  }, [props.count]);

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-div">
          <Autocomplete
            data={info}
            value={searchTerm}
            setValue={setSearchTerm}
          />
        </div>
        <div className="buttons">
          <div>
            <button
              className="skip-button"
              onClick={skip}
              disabled={props.count > 6 ? true : false}
            >
              <span className="button-text">
                {" "}
                <b>SKIP</b>
              </span>
            </button>
          </div>
          <button
            type="submit"
            className="search-button"
            onClick={submit}
            disabled={!searchTerm || props.count > 6 ? true : false}
          >
            <span className="button-text">
              {" "}
              <b>SUBMIT</b>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}

export default SongSearchForm;

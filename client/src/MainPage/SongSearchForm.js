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
    evt.preventDefault();
    // searchFor(searchTerm.trim() || undefined);
    // setSearchTerm(searchTerm.trim());
    // setSearchTerm(initialState);
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

  function addToCount() {
    props.setCount(props.count + 1);
  }
  useEffect(() => {
    localStorage.setItem("clicks", props.count);
  }, [props.count]);

  // function handleChange(evt) {
  //   setSearchTerm(evt.target.value);
  // }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-div">
          <Autocomplete
            data={info}
            value={searchTerm}
            setValue={setSearchTerm}
          />
          {/* <input
            autoFocus
            className="search-bar"
            name="searchTerm"
            placeholder="Search for the title or the artist"
            value={searchTerm}
            onChange={handleChange}
            type="search"
          /> */}
        </div>
        <div className="buttons">
          <div>
            <button
              className="skip-button"
              onClick={addToCount}
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
            onClick={addToCount}
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

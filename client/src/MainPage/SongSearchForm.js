import React, { useEffect, useState } from "react";
import "./SongSearchForm.css";
import Autocomplete from "./Autocomplete";
import { autoCompleteData } from "./autoCompleteData";

const initialState = "";

function SongSearchForm(props) {
  const [searchTerm, setSearchTerm] = useState(initialState);

  function handleSubmit(evt) {
    evt.preventDefault();
    // searchFor(searchTerm.trim() || undefined);
    // setSearchTerm(searchTerm.trim());
    // setSearchTerm(initialState);
  }

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
            data={autoCompleteData}
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
              disabled={props.count > 5 ? true : false}
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
            disabled={!searchTerm || props.count > 5 ? true : false}
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

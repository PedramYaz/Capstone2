import React, { useState } from "react";
import "./SongSearchForm.css";

const initialState = "";

function SongSearchForm({ searchFor }) {
  const [searchTerm, setSearchTerm] = useState(initialState);

  function handleSubmit(evt) {
    evt.preventDefault();
    searchFor(searchTerm.trim() || undefined);
    setSearchTerm(searchTerm.trim());
    setSearchTerm(initialState);
  }

  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-div">
          <input
            autoFocus
            className="search-bar"
            name="searchTerm"
            placeholder="Search for the title or the artist"
            value={searchTerm}
            onChange={handleChange}
            type="search"
          />
        </div>
        <div className="buttons">
          {/* DO I MAKE THIS A NEW FILE???? */}

          <button type="submit" className="skip-button">
            <span className="button-text">
              {" "}
              <b>SKIP</b>
            </span>
          </button>
          <button type="submit" className="search-button">
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

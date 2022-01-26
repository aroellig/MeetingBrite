import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
// import "./search.css";
import { hashHistory } from "react-router";

function Search(props) {
  useEffect(() => {
    props.fetchEvents();
  }, []);

  if (!props.events) return null
  
  const { listings } = props;
  const [filteredListing, setFilteredListing] = useState([]);
  const [inputWord, setInputWord] = useState("");

  const handleChange = (event) => {
    const wordEntered = event.target.value;
    setInputWord(wordEntered);
    let filteredArray = listings.filter((listing) => {
      return listing.title.toLowerCase().includes(wordEntered.toLowerCase());
    });
    if (wordEntered === "") {
      setFilteredListing([]);
    } else {
      setFilteredListing(filteredArray);
    }
  };
  const clearField = () => {
    setFilteredListing([]);
    setInputWord("");
  };
  const clearListingShow = (listingId) => {
    hashHistory.push(`/recipes/${listingId}`);
    clearField();
  };
  
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="SEARCH ENTIRE STORE HERE"
          onChange={handleChange}
          value={inputWord}
        />
        <div className="icons">
          {filteredListing.length === 0 ? (
            <div className="search-icon-div">
              <i className="fas fa-search" id="search-icon"></i>
            </div>
          ) : (
            <div className="clear-icon-div">
              <i
                className="fas fa-times"
                id="clearBtn"
                onClick={clearField}
              ></i>
            </div>
          )}
        </div>
      </div>
      {filteredListing.length !== 0 && (
        <div className="listingResult">
          {filteredListing.slice(0, 5).map((listing) => {
            return (
              <div
                className="dataItem"
                onClick={() => clearListingShow(listing._id)}
                key={listing._id}
              >
                <p>{listing.title}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
export default Search;

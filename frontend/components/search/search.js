import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
// import "./search.css";
import { hashHistory } from "react-router";

function Search(props) {
  useEffect(() => {
    props.fetchEvents();
  }, []);

  if (!props.events) return null
  
  const { events } = props;
  const [filteredListing, setFilteredListing] = useState([]);
  const [inputWord, setInputWord] = useState("");

  const handleChange = (event) => {
    const wordEntered = event.target.value;
    setInputWord(wordEntered);
    let filteredArray = events.filter((listing) => {
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
  const clearListingShow = (eventId) => {
    hashHistory.push(`/events/${eventId}`);
    clearField();
  };
  
  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Search for events here"
          onChange={handleChange}
          value={inputWord}
        />
        <div className="icons">
          {filteredListing.length === 0 ? (
            <i className="fas fa-search" id="search-icon"></i>
          ) : (
            <i className="fas fa-times" id="clearBtn" onClick={clearField}></i>
          )}
        </div>
      </div>
      {filteredListing.length !== 0 && (
        <div className="listingResult">
          {filteredListing.slice(0, 5).map((listing) => {
            return (
              <div
                className="dataItem"
                onClick={() => clearListingShow(listing.id)}
                key={listing.id}
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

export default withRouter(Search);
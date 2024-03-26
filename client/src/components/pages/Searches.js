import React, { useState, useEffect } from "react";
import CardSearch from "../modules/CardSearch.js";
import { get } from "../../utilities";
import "./Searches.css";

const Searches = (props) => {
  const [searches, setSearches] = useState([]);

  // When the Searches component mounts
  useEffect(() => {
    document.title = "Search Wopanaak Dictionary"
    get("/api/searches").then((searchObjs) => {
      let reversedSearchObjs = searchObjs.reverse();
      setSearches(reversedSearchObjs);
    });
  }, []);

  let searchesList = null;
  const hasSearches = searches.length !== 0;
  if (hasSearches) {
    searchesList = searches.map((searchObj) => (
      <CardSearch
        _id={searchObj._id}
        content={searchObj.content}
      />
    ));
  } else {
    console.log(searches.length)
    searchesList = <div>No words available</div>;
  }
  return (
    <div className="Search-container">
        <div className="Search-title">
            <h2>7 results for "sun"</h2>
        </div>

        <div className="Search-results">
          {searchesList}

            {/* <section className="Search-item">
                <Link to="" className="Search-item-link">
                    <span>Sun</span>
                    <span> - </span>
                    <span>jhjdhu8vvjvvwb</span>
                </Link>
                <p className="Search-item-par">
                    The bright celestial object which is the chief source of natural light and
                    heat on earth and appears to pass across the sky each day from east to bright
                    celestial object which is the chief source of natural light and heat on earth
                    and appears to pass across the sky each day from east to
                </p>
            </section> */}
        </div>
    </div>
  );
};
export default Searches;

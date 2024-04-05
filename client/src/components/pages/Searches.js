// Searches.js

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { get } from "../../utilities";
import CardSearch from "../modules/CardSearch";

const Searches = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);

  // Searches.js

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    let query = searchParams.get("q") || "";
    get(`/api/searches?q=${encodeURIComponent(query)}`).then((data) => {
      setSearchResults(data);
    }).catch(error => {
        console.error('Error fetching search results:', error);
    });
  }, [location.search]);


  return (
    <div>
      {searchResults.map((result, index) => (
        <CardSearch key={index} data={result} />
      ))}
    </div>
  );
};

export default Searches;

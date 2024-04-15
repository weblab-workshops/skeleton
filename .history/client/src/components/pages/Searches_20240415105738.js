import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Searches.css";

const Searches = () => {
    const location = useLocation();
    const [definitions, setDefinitions] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const query = searchParams.get('q');
        setSearchQuery(query);
        if (query) {
            fetch(`/api/searches?q=${encodeURIComponent(query)}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    if (Array.isArray(data)) {
                        setDefinitions(data);
                    } else {
                        console.error('Data received is not an array:', data);
                        setDefinitions([]);
                    }
                })
                .catch(error => {
                    console.error("Failed to fetch definitions:", error);
                    setDefinitions([]);
                });
        }
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

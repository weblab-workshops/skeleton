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
        <div className="Searches-container">
            <h2 className="Searches-title">{definitions.length} Search Results for: "{searchQuery || 'None'}"</h2>
            <div className="Searches-results">
            {definitions.length > 0 ? (
                definitions.map((def, index) => (
                    <div key={index}>
                        <Link className="Searches-result" to={`/definitions?q=${def._id}`}>
                            <p>
                                <span>English: </span>
                                <span className="Searches-bold">{def.Sense.TE?.["TE.TE"] || "Not available"}</span>
                            </p>
                            <p>
                                <span>Wopanaak: </span>
                                <span className="Searches-bold">{def["Lemma.LemmaSign"] || "Not available"}</span>
                            </p>
                            <p>
                                <span>Etymology: </span>
                                <span>{def["Lemma.Etymology"] || "Not available"}</span>
                            </p>
                        </Link>
                    </div>
                ))
            ) : (
                <h3 className="Searches-not">No words found.</h3>
            )}
            </div>
        </div>
    );
};

export default Searches;

// CardSearch.js

import React from "react";
import { Link } from "react-router-dom";

const CardSearch = ({ data }) => {
  const wordEnglish = data.Sense?.TE?.["TE.TE"] || "Unknown";
  const wordWopanaak = data["Lemma.LemmaSign"] || "Unknown";
  const id = data._id;

  return (
    <div>
      <Link to={`/definitions?q=${id}`}>
        <h4>{wordWopanaak} - {wordEnglish}</h4>
      </Link>
    </div>
  );
};

export default CardSearch;

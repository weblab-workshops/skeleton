import React from 'react';
import "./CardDefinition.css";

const CardDefinition = (props) => {
  return (
    <div className="CardDefinition-container">
      <div className="CardDefinition-title">
        <h1>
          <span>{props.wordWopanaak}</span>
          <span> - </span>
          <span>{props.wordEnglish}</span>
        </h1>
        <p className="CardDefinition-ety">Etymology: {props.etymology}</p>
      </div>

      <div className="CardDefinition-example">
        <h2>Example</h2>
        <p>
          <span>Example: </span>
          <span>{props.example}</span>
        </p>
        <p>
          <span>Translation: </span>
          <span>{props.example}</span>
        </p>
        <p>
          <span>Source:</span>
          <span>{props.source}</span>
        </p>
      </div>
    </div>
  );
};

export default CardDefinition;

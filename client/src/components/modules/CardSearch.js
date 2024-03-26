import React, { useState, useEffect } from "react";
import SingleSearchPost from "./SingleSearchPost.js";

const CardSearch = (props) => {
  return (
    <div>
      <SingleSearchPost
        _id={props._id}
        content={props.content}
      />
    </div>
  );
};
export default CardSearch;

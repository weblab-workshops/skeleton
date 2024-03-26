import React from "react";

const SingleSearchPost = (props) => {
  return (
    <div className="">
        <p className="">{props._id}</p>
        <p className="">{props.content}</p>
    </div>
  );
};

export default SingleSearchPost;

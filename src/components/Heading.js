import React from "react";
import "../style/Heading.css";

const Heading = ({ title }) => {
  return (
    <div className="heading">
      <h1>{title}</h1>
      <div className="border"></div>
    </div>
  );
};

export default Heading;

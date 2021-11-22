import React from "react";
import "../style/UserSuggestionCard.css";

const UserSuggestionCard = ({ name, bio }) => {
  return (
    <div className="suggestedUser">
      <img src="/image8.png" alt="" />
      <h1>{name}</h1>
      {bio && <h4>{bio}</h4>}
    </div>
  );
};

export default UserSuggestionCard;

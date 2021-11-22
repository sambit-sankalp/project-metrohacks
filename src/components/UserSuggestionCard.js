import React from 'react';
import { Link } from 'react-router-dom';
import '../style/UserSuggestionCard.css';

const UserSuggestionCard = ({ name, bio }) => {
  return (
    <div className="suggestedUser">
      <img src="/image8.png" alt="" />
      <Link to="/user/profile" style={{ textDecoration: 'none' }}>
        <h1 className="text">{name}</h1>
      </Link>
      {bio && <h4>{bio}</h4>}
    </div>
  );
};

export default UserSuggestionCard;

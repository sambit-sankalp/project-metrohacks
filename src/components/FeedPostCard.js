import { color } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import '../style/FeedPostCard.css';

const FeedPostCard = () => {
  return (
    <div className="FeedPostCard">
      <div className="PostUserDetail">
        <div className="PostUserImage">
          <img src="/image8.png" alt="" />
        </div>
        <div className="PostUserName">
          <Link
            to="/org/profile"
            style={{ textDecoration: 'none', color: '#000' }}
          >
            <h1>Societal Community</h1>
          </Link>
          <h4>Posted 5 min ago</h4>
        </div>
      </div>
      <div className="PostImage">
        <img
          src="https://media.istockphoto.com/vectors/people-cleaaning-up-the-beach-and-removing-trash-vector-id1193475328?k=20&m=1193475328&s=612x612&w=0&h=-Wp-p8zIlh4LmBQRNaJiJVUNZZLTnsdASYGFTd0aYrs="
          alt=""
        />
      </div>
      <div className="PostDesc">
        <div className="PostDescText">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          molestiae ipsa rem soluta exercitationem, modi nam vel, eius quod
          consectetur repellendus in! Id, maxime dignissimos sint at fugit
          provident sed. Ut eaque cupiditate exercitationem corporis alias
          saepe. Pariatur, ullam unde soluta minus facere, similique nobis quas
          excepturi delectus assumenda consequatur! Reiciendis nobis nulla
        </div>
        <div className="border"></div>
        <div className="PostSocialDetails">
          <h3>Like</h3>
          <h3>Attendee</h3>
          <h3> Share </h3>
        </div>
        <div className="border"></div>
      </div>
    </div>
  );
};

export default FeedPostCard;

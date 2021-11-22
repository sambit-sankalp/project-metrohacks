import React from 'react';
import Button from '../components/Button';
import FeedPostCard from '../components/FeedPostCard';
import Heading from '../components/Heading';
import HomeStory from '../components/HomeStory';
import UserSuggestionCard from '../components/UserSuggestionCard';
import { Link } from 'react-router-dom';
import '../style/Feed.css';

const Feed = () => {
  return (
    <div className="home">
      <div className="homeLeft">
        <div className="homeUserProfile">
          <div className="userPhoto">
            <img src="/image8.png" alt="" />
          </div>
          <Link to="/user/profile" style={{ textDecoration: 'none' }}>
            <Button text="See Your Profile" link="/user/profile" />
          </Link>
        </div>

        <div className="homeSuggestion">
          <h1>Suggestion</h1>
          <UserSuggestionCard name="Sambit Sankalp" bio="Social Worker" />
          <UserSuggestionCard name="Prachi Nandi" bio="Social Worker" />
          <UserSuggestionCard name="Hemant Bajaj" bio="Social Worker" />
          <UserSuggestionCard name="Priyank Singh" bio="Social Worker" />
        </div>
      </div>
      <div className="homeRight">
        <div className="homeStories">
          <HomeStory />
          <HomeStory />
          <HomeStory />
          <HomeStory />
          <HomeStory />
        </div>
        <div className="border"></div>
        <Heading title="Feeds" />
        <div className="Post">
          <FeedPostCard />
          <FeedPostCard />
        </div>
      </div>
    </div>
  );
};

export default Feed;

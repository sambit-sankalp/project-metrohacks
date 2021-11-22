import React from "react";
import ProfileCard from "../components/ProfileCard";
import "../style/UserPage.css";

const UserProfile = () => {
  return (
    <div className="UserPage">
      <div className="UserDetails">
        <div className="userImage">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShk41e5xiIV70ex9TcpZZLnkenEKywJ2PiVg&usqp=CAU"
            alt=""
          />
        </div>
        <div className="userProfileDetails">
          <div className="userNameButton">
            <h1 className="UserName">John Doe</h1>
            <button> Follow</button>
          </div>

          <h3 className="UserBio">A social worker, community builder</h3>
          <div className="UserProfileConnections">
            <div>
              <h3>176</h3>
              <h3>Organization</h3>
            </div>
            <div>
              <h3>150</h3>
              <h3>Followed</h3>
            </div>
            <div>
              <h3>100</h3>
              <h3>Following</h3>
            </div>
            <div>
              <h3>50</h3>
              <h3>Events</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="border"></div>
      <div className="socialWork">
        <h1 className="socialWorkTitle">Social Works</h1>
        <div className="SocialWorkGrid">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
      <div className="socialWork">
        <h1 className="socialWorkTitle">Events attended</h1>
        <div className="SocialWorkGrid">
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

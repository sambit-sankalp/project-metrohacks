import React from "react";
import Button from "../components/Button";
import ProfileCard from "../components/ProfileCard";
import "../style/UserPage.css";

const OrganizationProfile = () => {
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
            <h1 className="UserName">Unicef</h1>
            <Button text="Join" />
          </div>

          <h3 className="UserBio">A social worker, community builder</h3>
          <div className="UserProfileConnections">
            <div>
              <h3>150</h3>
              <h3>Members</h3>
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
        <h1 className="socialWorkTitle">Upcoming Events</h1>
        <div className="SocialWorkGrid">
          <ProfileCard
            image="/image9.png"
            title="Tree Plantation"
            attendee="200 people registered"
          />
          <ProfileCard
            image="/image11.png"
            title="Beach Cleaning"
            attendee="176 people registered"
          />
          <ProfileCard
            image="/image13.png"
            title="Food Sharing"
            attendee="145 people registered"
          />
        </div>
      </div>
      <div className="socialWork">
        <h1 className="socialWorkTitle">Past Events</h1>
        <div className="SocialWorkGrid">
          <ProfileCard
            image="/image9.png"
            title="Tree Plantation"
            attendee="145 people attended"
          />
          <ProfileCard
            image="/image11.png"
            title="Beach Cleaning"
            attendee="179 people attended"
          />
          <ProfileCard
            image="/image13.png"
            title="Food Sharing"
            attendee="219 people attended"
          />
        </div>
      </div>
    </div>
  );
};

export default OrganizationProfile;

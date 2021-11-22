import React from "react";
import "../style/ProfileCard.css";

const ProfileCard = ({ image, title, attendee }) => {
  return (
    <div className="profileCard">
      <div>
        <img src={image} alt="" className="ProfileCardImage" />
      </div>
      <div className="profileCardText">
        <div className="profileCardTitle">
          <h1>{title}</h1>
        </div>
        <div className="profileCardDescription">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
          laboriosam ipsum cumque quae quam. Amet nostrum esse quidem
          repudiandae, enim vel unde quia cum maxime deleniti pariatur ipsam?
          Dolores, tempore.
        </div>
        <div className="profileCardAttendee">{attendee}</div>
      </div>
    </div>
  );
};

export default ProfileCard;

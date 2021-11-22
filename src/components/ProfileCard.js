import React from "react";
import "../style/ProfileCard.css";

const ProfileCard = () => {
  return (
    <div className="profileCard">
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShk41e5xiIV70ex9TcpZZLnkenEKywJ2PiVg&usqp=CAU"
          alt=""
          className="ProfileCardImage"
        />
      </div>
      <div className="profileCardText">
        <div className="profileCardTitle">
          <h1>Tree Plantation</h1>
        </div>
        <div className="profileCardDescription">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
          laboriosam ipsum cumque quae quam. Amet nostrum esse quidem
          repudiandae, enim vel unde quia cum maxime deleniti pariatur ipsam?
          Dolores, tempore.
        </div>
        <div className="profileCardAttendee">229 people attended</div>
      </div>
    </div>
  );
};

export default ProfileCard;

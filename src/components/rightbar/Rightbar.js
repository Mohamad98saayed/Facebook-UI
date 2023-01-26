import "./Rightbar.css";

import { Users } from "../../dummyData";

import Online from "../online/Online";

const HomeRightbar = () => {
  return (
    <>
      <div className="birthdayContainer">
        <img alt="" src="/assets/gift.png" className="birthdayImg" />
        <span className="birthdayText">
          <b>Ali</b> and <b>3 other friends</b> have their birthday today.
        </span>
      </div>
      <img className="rightbarAd" src="/assets/ad.png" alt="" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
        {Users.map((u) => (
          <Online key={u.id} user={u} />
        ))}
      </ul>
    </>
  );
};

const ProfileRightbar = () => {
  return (
    <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInfoValue">New York</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Madrid</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img
            alt=""
            src="assets/person/1.jpeg"
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>

        <div className="rightbarFollowing">
          <img
            alt=""
            src="assets/person/2.jpeg"
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>

        <div className="rightbarFollowing">
          <img
            alt=""
            src="assets/person/3.jpeg"
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>

        <div className="rightbarFollowing">
          <img
            alt=""
            src="assets/person/4.jpeg"
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>

        <div className="rightbarFollowing">
          <img
            alt=""
            src="assets/person/5.jpeg"
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>

        <div className="rightbarFollowing">
          <img
            alt=""
            src="assets/person/6.jpeg"
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>

        <div className="rightbarFollowing">
          <img
            alt=""
            src="assets/person/7.jpeg"
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>

        <div className="rightbarFollowing">
          <img
            alt=""
            src="assets/person/8.jpeg"
            className="rightbarFollowingImg"
          />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
      </div>
    </>
  );
};

function Rightbar({ profile }) {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

export default Rightbar;

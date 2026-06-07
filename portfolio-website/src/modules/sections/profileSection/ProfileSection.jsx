import profileImage from "../../../assets/images/profileImage.jpeg";
import "../profileSection/ProfileSection.css";

const ProfileSection = () => {
  return (
    <>
      <div>
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
      <div>

        <h3 className="name">JINETTA SHREE GOKUL RAJAN</h3>
        <h4>Frontend Developer</h4>
      </div>
    </>
  );
};

export default ProfileSection;

import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.mainBlock}>
        <img
          className={s.profileImg}
          src={
            image || "https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          }
          alt="User avatar"
        />
        <p className={s.textName}>{name}</p>
        <p className={s.textData}>@{tag}</p>
        <p className={s.textData}>{location}</p>
      </div>
      <ul className={s.list}>
        <li className={s.textItem}>
          <span>Followers</span>
          <span className={s.textSpan}>{stats.followers}</span>
        </li>
        <li className={s.textItem}>
          <span>Views</span>
          <span className={s.textSpan}>{stats.views}</span>
        </li>
        <li className={s.textItem}>
          <span>Likes</span>
          <span className={s.textSpan}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;

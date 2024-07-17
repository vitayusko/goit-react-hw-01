import s from "./FriendListItem.module.css"; // Import CSS module

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.wrapper}>
      <img
        className={s.img}
        src={
          avatar || "https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
        }
        alt="Avatar"
        width="48"
      />
      <p className={s.text}>{name}</p>
      <span className={isOnline ? s.online : s.offline}>
        {isOnline ? "Online" : "Offline"}
      </span>
    </div>
  );
};

export default FriendListItem;

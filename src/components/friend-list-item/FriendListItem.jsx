import css from "./FriendListItem.module.css";

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <li className={css.friendListItem}>
      <div>
        <img src={avatar} alt={name} width="48" />
        <p className={css.name}>{name}</p>
        {isOnline ? (
          <p className={css.online}>{"Online"}</p>
        ) : (
          <p className={css.offline}>{"Offline"}</p>
        )}
      </div>
    </li>
  );
};

export default FriendListItem;
// rafce

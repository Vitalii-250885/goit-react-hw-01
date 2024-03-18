import FriendListItem from "../friend-list-item/FriendListItem";
import css from "./FriendList.module.css";

const FriendList = (friends) => {
  return (
    <ul className={css.friendList}>
      {Object.values(friends)[0].map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
        );
      })}
    </ul>
  );
};

export default FriendList;

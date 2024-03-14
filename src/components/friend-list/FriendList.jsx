import FriendListItem from "../friend-list-item/FriendListItem";
import css from "./FriendList.module.css";

const FriendList = (friends) => {
  return (
    <ul className={css.friendList}>
      {Object.values(friends)[0].map((friend) => {
        return (
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id}
          />
        );
      })}
    </ul>
  );
};

export default FriendList;

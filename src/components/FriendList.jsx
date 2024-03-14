import FriendListItem from "./FriendListItem";

const FriendList = (propFriends) => {
  return (
    <>
      <ul>
        {propFriends[0].map((friend) => {
          console.log(friend);
        })}
        <li>
          <FriendListItem />
        </li>
      </ul>
    </>
  );
};

export default FriendList;

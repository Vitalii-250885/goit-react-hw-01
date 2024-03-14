import "./App.css";
import userData from "./userData.json";
import friends from "./friends.json";
import Profile from "./components/Profile";
import FriendList from "./components/FriendList";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList propFriends={friends} />
    </>
  );
}

export default App;

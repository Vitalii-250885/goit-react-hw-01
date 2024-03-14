import "./App.css";
import userData from "../../userData.json";
import friends from "../../friends.json";
import transactions from "../../transactions.json";

import Profile from "../profile/Profile";
import FriendList from "../friend-list/FriendList";
import TransactionHistory from "../transaction-history/TransactionHistory";

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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;

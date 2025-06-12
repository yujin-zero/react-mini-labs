import withUser from "./components/HOC/withUser";
import UserDisplay from "./components/HOC/UserDisplay";

const UserDisplayWithUser = withUser(UserDisplay);

function App() {
  return (
    <div>
      <UserDisplayWithUser userId={1} />
    </div>
  );
}

export default App;

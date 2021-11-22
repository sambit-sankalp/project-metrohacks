import Feed from "./pages/Feed";
import IndividualPost from "./pages/IndividualPost";
import OrganizationProfile from "./pages/OrganizationProfile";
import UserProfile from "./pages/UserProfile";
import SignIn from './components/AuthScreens/SignIn';

function App() {
  return (
    <div className="App">
      <Feed />
      <OrganizationProfile />
      <IndividualPost />
      <UserProfile />
    </div>
  );
}

export default App;

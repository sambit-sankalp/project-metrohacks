import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IndividualPost from './pages/IndividualPost';
import OrganizationProfile from './pages/OrganizationProfile';
import UserProfile from './pages/UserProfile';
import Feed from './pages/Feed';
import OrgSignIn from './components/AuthScreens/OrgSignIn';
import OrgSignUp from './components/AuthScreens/OrgSignUp';
import UserSignUp from './components/AuthScreens/SignUp';
import UserSignIn from './components/AuthScreens/SignIn';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/org/signup" element={<OrgSignUp />} />
          <Route path="/org/signin" element={<OrgSignIn />} />
          <Route path="/user/signin" element={<UserSignIn />} />
          <Route path="/user/signup" element={<UserSignUp />} />
          <Route path="/post" element={<IndividualPost />} />
          <Route path="/org/profile" element={<OrganizationProfile />} />
          <Route path="/user/profile" element={<UserProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import LoginForm from "./components/auth/LoginForm";
// import SignUpForm from "./components/auth/SignUpForm";
// import NavBar from "./components/NavBar";
import LoginPage from './components/LoginPage/LoginPage';
import SignupPage from './components/SignupPage/SignupPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import SearchPage from './components/SearchPage/SearchPage';
import GroupPage from './components/GroupPage/GroupPage';
import ActivityPage from './components/ActivityPage/ActivityPage';
// import LikesPage from './components/LikesPage/LikesPage';
import FriendsPage from './components/FriendsPage/FriendsPage';
import ProtectedRoute from "./components/auth/ProtectedRoute";
// import UsersList from "./components/UsersList";
// import User from "./components/User";
import Main from './components/Main';
import { authenticate } from "./services/auth";
import { setCurrentUser } from './store/ducks/currentUser';

function App() {
  const dispatch = useDispatch();
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      const user = await authenticate();
      // console.log(user)
      if (!user.errors) {
        setAuthenticated(true);
        dispatch(setCurrentUser(user))
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      {/* <NavBar setAuthenticated={setAuthenticated} /> */}
      <Route path="/login" exact={true}>
        <LoginPage
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path="/signup" exact={true}>
        <SignupPage authenticated={authenticated} setAuthenticated={setAuthenticated} />
      </Route>
      <ProtectedRoute path="/groups/:groupId" exact={true} authenticated={authenticated}>
        <GroupPage/>
      </ProtectedRoute>
      <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
        <ProfilePage />
      </ProtectedRoute>
      <ProtectedRoute path="/users/:userId/friends" exact={true} authenticated={authenticated}>
        <FriendsPage />
      </ProtectedRoute>
      <ProtectedRoute path="/search" authenticated={authenticated}>
        <SearchPage />
      </ProtectedRoute>
      <ProtectedRoute path="/notifications" exact={true} authenticated={authenticated}>
        <ActivityPage />
      </ProtectedRoute>
      <ProtectedRoute path="/" exact={true} authenticated={authenticated} 
        setAuthenticated={setAuthenticated} component={Main}>
      </ProtectedRoute>
    </BrowserRouter>
  );
}

export default App;

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
import NewGroupPage from './components/NewGroupPage/NewGroupPage';
import ActivityPage from './components/ActivityPage/ActivityPage';
// import LikesPage from './components/LikesPage/LikesPage';
import FriendsPage from './components/FriendsPage/FriendsPage';
import ProtectedRoute from "./components/auth/ProtectedRoute";
// import UsersList from "./components/UsersList";
// import User from "./components/User";
import Main from './components/Main';
import { authenticate } from "./services/auth";
import { setCurrentUser } from './store/ducks/currentUser';


import { loadPosts } from './store/ducks/posts';
import { loadInvites } from './store/ducks/invites';

function App() {
  const dispatch = useDispatch();
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  let currentUser = useSelector(state => state.currentUser)

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

  

  // useEffect(() => {
  //   (async () => {
  //     if (authenticated) {
  //       await dispatch(loadPosts())
  //       await dispatch(loadInvites())
  //     }
  //   })();
  // }, [authenticated]);

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
      {/* <Route path="/signup" exact={true}>
        <SignupPage authenticated={authenticated} setAuthenticated={setAuthenticated} />
      </Route> */}
      <ProtectedRoute path="/groups/:groupId" exact={true} authenticated={authenticated}>
        <GroupPage/>
      </ProtectedRoute>
      <ProtectedRoute path="/new-group" exact={true} authenticated={authenticated}>
        <NewGroupPage/>
      </ProtectedRoute>
      <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
        <ProfilePage />
      </ProtectedRoute>
      <ProtectedRoute path="/users/:userId/friends" exact={true} authenticated={authenticated}>
        <FriendsPage />
      </ProtectedRoute>
      <ProtectedRoute path="/search" setAuthenticated={setAuthenticated} authenticated={authenticated}>
        <SearchPage authenticated={authenticated} setAuthenticated={setAuthenticated} />
      </ProtectedRoute>
      <ProtectedRoute path="/notifications" exact={true} authenticated={authenticated}>
        <ActivityPage />
      </ProtectedRoute>
      <ProtectedRoute path="/" exact={true} currentUser={currentUser} authenticated={authenticated} 
        setAuthenticated={setAuthenticated} component={Main}>
      </ProtectedRoute>
    </BrowserRouter>
  );
}

export default App;

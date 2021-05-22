import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginPage from './components/LoginPage/LoginPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import SearchPage from './components/SearchPage/SearchPage';
import GroupPage from './components/GroupPage/GroupPage';
import NewGroupPage from './components/NewGroupPage/NewGroupPage';
import ActivityPage from './components/ActivityPage/ActivityPage';
import FriendsPage from './components/FriendsPage/FriendsPage';
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Main from './components/Main';
import { authenticate } from "./services/auth";
import { setCurrentUser } from './store/ducks/currentUser';


function App() {
  const dispatch = useDispatch();
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  let currentUser = useSelector(state => state.currentUser)

  useEffect(() => {
    (async() => {
      const user = await authenticate();
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
      <Route path="/login" exact={true}>
        <LoginPage
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <ProtectedRoute path="/groups/:groupId" exact={true} authenticated={authenticated} setAuthenticated={setAuthenticated}>
        <GroupPage/>
      </ProtectedRoute>
      <ProtectedRoute path="/new-group" exact={true} authenticated={authenticated} setAuthenticated={setAuthenticated}>
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

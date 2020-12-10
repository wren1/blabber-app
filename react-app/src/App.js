import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
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

  // useEffect(() => {
  //   (async() => {
  //     if (authenticated) {
  //       dispatch(setCurrentUser(user))
  //     } else {
  //       dispatch(setCurrentUser(null))
  //     }
  //   })()
  // }, [authenticated])

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar setAuthenticated={setAuthenticated} />
      <Route path="/login" exact={true}>
        <LoginForm
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path="/sign-up" exact={true}>
        <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
      </Route>
      <ProtectedRoute path="/users" exact={true} authenticated={authenticated}>
        <UsersList/>
      </ProtectedRoute>
      <ProtectedRoute path="/users/:userId" exact={true} authenticated={authenticated}>
        <User />
      </ProtectedRoute>
      <ProtectedRoute path="/" exact={true} authenticated={authenticated} 
        setAuthenticated={setAuthenticated} component={Main}>
      </ProtectedRoute>
    </BrowserRouter>
  );
}

export default App;

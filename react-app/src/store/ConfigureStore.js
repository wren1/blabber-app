import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import currentUser from "./ducks/currentUser";
import users from "./ducks/users";
import groups from "./ducks/groups";
import invites from "./ducks/invites";
import posts from "./ducks/posts";
import comments from "./ducks/comments";
import search from "./ducks/search";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
  currentUser,
  users,
  groups,
  invites,
  posts,
  comments,
  search
});

const configureStore = (initialState) => {
  return createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
};

export default configureStore;
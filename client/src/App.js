import axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch, useHistory, Link } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signUp";
import Settings from "./pages/settings";
import Profile from "./pages/profile";
import Swipe from "./pages/swipe";
import Inbox from "./pages/inbox";
import Chats from "./pages/chats";
import Help from "./pages/help";
import SearchUsers from "./pages/SearchUsers/searchusers";
import { LOADING, SET_USER, UNSET_USER } from "./store/actions";
import { useStoreContext } from "./store/store";
//Fontawesome dependencies
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeart, faEdit, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { io } from "socket.io-client";

library.add(fab, faEnvelope, faHeart, faEdit, faMapMarker);
//Use throughout app where icons are needed: import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' with <FontAwesomeIcon icon="{iconName}" />

const App = () => {
  const socket = io();
  socket.on("connection", () => {
    console.log("connected to server");
    console.log(socket.id);
  })

  
  const history = useHistory();
  const [state, dispatch] = useStoreContext();
  
  const [isLoggedInLoading, setIsLoggedInLoading] = useState(true);
  
  useEffect(() => {
    dispatch({ type: LOADING });
    console.log("useEffect in app");
    axios
    .get("/api/users")
    .then((response) => {
      console.log(response);
      if (response.data.user) {
        dispatch({ type: SET_USER, user: response.data.user });
        socket.emit('init', state.user._id)
        } else {
          dispatch({ type: UNSET_USER });
          history.push("/login");
        }
        setIsLoggedInLoading(false);
    })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(isLoggedInLoading);

  if (isLoggedInLoading) {
    return <div></div>;
  }

  return (
    <div>
      <Navbar />

      {state.user ? (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/searchusers" component={SearchUsers} />
          <Route exact path="/profile" component={Profile} />
           
          <Route exact path="/swipe" component={Swipe} />
          {/* Inbox displays all messages */}
          <Route exact path="/inbox" component={Inbox} />
          {/* Chats is direct messaging */}
          <Route exact path="/chats" component={Chats} />
          <Route exact path="/help" component={Help} />
          <Route component={Home} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/help" component={Help} />
          <Route component={Signup} />
        </Switch>
      )}
    </div>
  );
};

export default App;

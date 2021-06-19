import axios from 'axios';
import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signUp';
import { LOADING, SET_USER, UNSET_USER } from './store/actions';
import { useStoreContext } from './store/store';

const App = () => {
  const history = useHistory();
  const [state, dispatch] = useStoreContext();

  useEffect(() => {
    dispatch({ type: LOADING });
    console.log("useEffect in app")
    axios.get('/api/users').then((response) => {
      console.log(response);
      if (response.data.user) {
        dispatch({ type: SET_USER, user: response.data.user });
        history.push('/');
      } else {
        dispatch({ type: UNSET_USER });
        history.push('/login');
      }
    }).catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <div>
      <Navbar />

      {state.user ? (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/" component={Settings} />
          <Route exact path="/" component={SearchUsers} />
          <Route exact path="/" component={Profile} />
          <Route exact path="/" component={Swipe} />
          {/* Inbox displays all messages */}
          <Route exact path="/" component={Inbox} />
          {/* Chats is direct messaging */}
          <Route exact path="/" component={Chats} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Redirect to="/login" />
        </Switch>
      )}
    </div>
  );
};

export default App;

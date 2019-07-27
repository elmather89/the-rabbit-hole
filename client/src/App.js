import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';
import Nav from './components/Nav';
import Books from "./pages/Books";
import bookDetails from "./pages/bookDetails";
import creatorDetails from "./pages/creatorDetails";
import Register from './components/Register';
import Login from './components/Login';
import EditBook from './components/EditForm/index';
import NoMatch from "./pages/NoMatch";

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}

export function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Books} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/books/:id" component={bookDetails} />
            <Route exact path="/creator/:id" component={creatorDetails} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/edit/:id" component={EditBook} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </Provider>
  )
};

export default App;
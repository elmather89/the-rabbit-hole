import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import creatorDetails from "./pages/creatorDetails";
import bookDetails from "./pages/bookDetails";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

export function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={bookDetails} />
          <Route exact path="/creatorDetails" component={creatorDetails} />
          <Route component={NoMatch} /> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
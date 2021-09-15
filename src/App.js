import React from "react";
import Navbar from "./Components/Navbar";
import Table from "./Components/Table/Table";
import Home from "./Components/Home/Home";
import Post from "./Components/Post/Post";
import Notes from "./Components/Notes/Notes";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends React.Component //app is the js file name
{
  render()
  {
    return(
      <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/post' component={Post}/>
          <Route path='/todo' component={Table}/>
          <Route path='/note' component={Notes}/>
        </Switch>
      </Router>
      </>
    );
  }
}

export default App;
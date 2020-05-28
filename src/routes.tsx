import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from "./components/login/login";
import Home from "./components/home/home";

export default () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/login' component={Login}/>
  </Switch>
)

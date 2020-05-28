import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from "./pages/login/login";
import Home from "./pages/home/home";

export default () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route exact path='/login' component={Login}/>
  </Switch>
)

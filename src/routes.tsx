import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from "./modules/login/login";
import Home from "./modules/home/home";

export default () => (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
    </Switch>
)

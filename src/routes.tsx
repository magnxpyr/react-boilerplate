import React from 'react'
import { Route, HashRouter, Switch } from 'react-router-dom'
import Login from "./login/login";
import Example from "./example/example";

export default () => (
    <HashRouter>
        <Switch>
            <Route exact path='/login' component={ Login } />
            <Route exact path='/example' component={ Example } />
        </Switch>
    </HashRouter>
)

import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route    
  } from "react-router-dom";

import Login from '../pages/user-login.page';
import Register from '../pages/user-register.page';

function AuthRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
            </Switch>
        </Router>
    )
}

export default AuthRouter

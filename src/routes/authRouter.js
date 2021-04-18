import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,    
    Redirect
  } from "react-router-dom";
import AuthNavbar from '../components/Navbars/authNavbar';
import Landing from '../pages/landing.page';

import Login from '../pages/user-login.page';
import Register from '../pages/user-register.page';

function AuthRouter() {
    return (
        <Router>
            <AuthNavbar />
            <Switch>
                <Route exact path="/auth/login" component={Login} />
                <Route exact path="/auth/register" component={Register} />
                <Redirect from="/auth" to="/auth/login" />
            </Switch>
        </Router>
    )
}

export default AuthRouter

import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route    
  } from "react-router-dom";
import AuthNavbar from '../components/Navbars/authNavbar';
import MainNavbar from '../components/Navbars/authNavbar';
import Dashboard from '../pages/dashboard.page';
import Landing from '../pages/landing.page';
import ProductList from '../pages/products/productList.page';
import Login from '../pages/user-login.page';
import Register from '../pages/user-register.page';
import AdminRouter from './adminRouter';
import AuthRouter from './authRouter';

function MainRouter() {
    return (
        <Router>
            <div>
                <AuthNavbar />
                <Switch>
                    <Route exact path="/products" component={ProductList} />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                </Switch>
            </div>            
        </Router>
    )
}

export default MainRouter

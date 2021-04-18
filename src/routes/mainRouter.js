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
import ProductDetail from '../pages/products/productDetail.page'
import Analytics from '../pages/analytics/analytics';
import ProductDelModal from '../components/Modals/productDelModal';
import ProductUpdate from '../pages/products/productUpdate';

function MainRouter() {
    return (
        <Router>
            <div>
                {/* <AuthNavbar /> */}
                <Switch>
                    <Route path="/admin" component={AdminRouter} />
                    <Route path="/auth" component={AuthRouter} />
                    <Route path="/" component={Landing} />             
                </Switch>
            </div>            
        </Router>
    )
}

export default MainRouter

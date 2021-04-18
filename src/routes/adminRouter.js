import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect    
  } from "react-router-dom";
import ProductDelModal from '../components/Modals/productDelModal';
import MainNavbar from '../components/Navbars/mainNavbar';
import Analytics from '../pages/analytics/analytics';
import Dashboard from '../pages/dashboard.page';
import ProductDetail from '../pages/products/productDetail.page';
import ProductList from '../pages/products/productList.page';
import ProductUpdate from '../pages/products/productUpdate';
import AuthRouter from './authRouter';

function AdminRouter() {
    return (
        <Router>
            <MainNavbar />
            <Switch>
                <Route exact path="/admin/dashboard" component={Dashboard} />
                <Route exact path="/admin/products" component={ProductList} />
                {/* <Route exact path="/product-update" component={ProductUpdate} />
                <Route exact path="/productdel-modal" component={ProductDelModal} /> */}
                <Route exact path="/admin/analytics" component={Analytics} />
                {/* <Route exact path="/product-detail" component={ProductDetail} /> */}
                <Redirect from="/admin" to="/admin/dashboard" />
            </Switch>
        </Router>
    )
}

export default AdminRouter

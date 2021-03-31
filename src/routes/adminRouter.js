import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route    
  } from "react-router-dom";
import Dashboard from '../pages/dashboard.page';
import ProductList from '../pages/products/productList.page';

function AdminRouter() {
    return (
        <Router>
            <Switch>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route exact path="/products" component={ProductList} />
            </Switch>
        </Router>
    )
}

export default AdminRouter

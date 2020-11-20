import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

//  Data Customer

import DataCustomer from "./components/customer/DataCustomer";
import Login from "./components/customer/Login";
import Registration from "./components/customer/Registration";
import Home from "./components/customer/Home";

// Routing
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                   <Route path="/" exact component={Home} />
                    <Route path="/Home"  component={Home} />
                    <Route path="/Login" component={Login} />
                    <Route path="/DataCustomer" component={DataCustomer} />
                    <Route path="/Registration" component={Registration} />
                </Switch>
            </Router>
        )
    }
}
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

import { Home } from '../pages/Home';
import { Items } from './Items';
import { Form } from './Form';
import { NotFound } from '../pages/NotFound';
import { About } from '../pages/About';

type HeaderProps = {
    message: string,
    logo: string
}

export const Header: React.FunctionComponent<HeaderProps> = (props: HeaderProps) => (
    <Router>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="#">
                <img src={props.logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top" alt="" loading="lazy" />
                {props.message}
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup" >
                <div className="navbar-nav mr-auto">
                    <NavLink className="nav-item nav-link" activeClassName="active" to="/" exact={true}>Home</NavLink>
                    <NavLink className="nav-item nav-link" activeClassName="active" to="/list">List</NavLink>
                    <NavLink className="nav-item nav-link" activeClassName="active" to="/add">Add</NavLink>
                    <NavLink className="nav-item nav-link" activeClassName="active" to="/test">Test</NavLink>
                    <NavLink className="nav-item nav-link" activeClassName="active" to="/about">About</NavLink>
                </div>
                
                <button className="btn btn-warning" type="button">Citas</button>
                
            </div>
        </nav>
        <main role="main">
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/list">
                    <Items />
                </Route>
                <Route path="/add">
                    <Form />
                </Route>
                <Route exact={true} path="/">
                    <Home />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </main>
    </Router>
);
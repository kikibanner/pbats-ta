import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/About'
import Contact from '../views/Contact'
import Login from '../views/Login'
import Register from '../views/Register'
import Dashboard from '../views/Dashboard'
import Form from '../views/Form'

function Router(props) {
    return (
        <Switch>
            <Route exact path='/login'>
                <Login />
            </Route>
            <Route exact path='/register'>
                <Register />
            </Route>
            <Route exact path='/dashboard'>
                <Dashboard />
            </Route>
            <Route exact path='/form'>
                <Form />
            </Route>
            <Route exact path='/logout'>
                <Login />
            </Route>


            <Route exact path='/'>
                <Home />
            </Route>
            <Route exact path='/about'>
                <About />
            </Route>
            <Route exact path='/contact' component={Contact} />
        </Switch>
    );
}

export default Router;
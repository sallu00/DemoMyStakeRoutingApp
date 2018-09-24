import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Router, browserHistory} from 'react-router';
import Dashboard from './components/dashboard';
export default class Routes extends React.Component {

    render() {
        return (
                <Router history = {browserHistory}>         
                    <Route path="/" component={Dashboard} />
                </Router>
        );
    }
}
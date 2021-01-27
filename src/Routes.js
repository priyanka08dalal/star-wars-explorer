import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import PeopleList from './components/peopleList'
import ItemsButton from './components/ItemsButton'

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={ItemsButton} />
                    <Route path="/people" component={PeopleList} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;
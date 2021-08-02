import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/styles.scss';
import Home from './home';

export const EntryRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route
                    path="/summoner/:name"
                    component = {Home}
                /> */}
            </Switch>
        </BrowserRouter>
    );
};

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/styles.scss';
import Home from './home';
import PackPick from './packPick';
import Solve from './solve';

export const EntryRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/pack" component={PackPick} />
                <Route path="/solve/:id" component={Solve} />
            </Switch>
        </BrowserRouter>
    );
};

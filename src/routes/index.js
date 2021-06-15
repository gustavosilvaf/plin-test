import React from 'react';

import { Switch, BrowserRouter, Route } from 'react-router-dom';

import { Index } from '../pages/dashboardIndex';

export const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route
                exact
                path="/"
                component={Index}
            />
        </Switch>
    </BrowserRouter>
);

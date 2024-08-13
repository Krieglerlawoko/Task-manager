import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import TaskDetail from './pages/TaskDetail';
import NotFound from './pages/NotFound';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/task/:id" component={TaskDetail} />
    <Route component={NotFound} />
  </Switch>
);

export default Routes;

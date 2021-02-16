import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Login from './view/login/Login';
import Dasbohard from './view/dasbohard/Dashbohard';

function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact component={Dasbohard} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default AppRouter;

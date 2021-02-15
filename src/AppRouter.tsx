import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Login from './view/login/Login';

function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Login} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default AppRouter;

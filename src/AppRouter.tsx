import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Login from './view/login/Login';
import Dasbohard from './view/dasbohard/Dashbohard';
import AddAndEdit from './view/addAndEdit/AddAndEdit';

function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact component={Dasbohard} />
          <Route path="/edit/client" exact component={AddAndEdit} />
          <Route path="/edit/product" exact component={AddAndEdit} />
          <Route path="/add/client" exact component={AddAndEdit} />
          <Route path="/add/product" exact component={AddAndEdit} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default AppRouter;

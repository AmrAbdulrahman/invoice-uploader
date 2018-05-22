import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import AppLayout from 'Containers/Layout';
import Home from 'Pages/Home';
import InvoiceUploader from 'Pages/InvoiceUploader';
import { history } from '../Redux/ConfigureStore';

class AppRouter extends Component {
  render() {
    return (
      <ConnectedRouter history={ history }>
        <AppLayout>
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/invoice-uploader' component={ InvoiceUploader } />
            <Redirect to='/' />
          </Switch>
        </AppLayout>
      </ConnectedRouter>
    );
  }
}

export default AppRouter;

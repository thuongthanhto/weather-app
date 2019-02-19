import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './redux/configStore';
import HomePage from './pages/HomePage/';
import DetailContainer from './containers/DetailContainer';

export default class Routes extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/detail/:id" component={DetailContainer} />
        </Switch>
      </ConnectedRouter>
    );
  }
}

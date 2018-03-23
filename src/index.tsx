import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import Grid from './containers/Grid';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={App} />
      <Route exact={true} path="/grid" component={Grid} />
      <Route path="/color/:colorName" component={App} />
    </Switch>
  </BrowserRouter>,
  document.querySelector('#root') as HTMLElement
);

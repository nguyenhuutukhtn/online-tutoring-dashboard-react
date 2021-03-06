/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store from './helpers/store';

// import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import '../node_modules/mdbreact/dist/css/mdb.css';
// import Register from './components/register/register';
// import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <Switch>
        <Route path="/login" render={props => <Login {...props} />} />
        <Route path="/" render={props => <App {...props} />} />
      </Switch> */}
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

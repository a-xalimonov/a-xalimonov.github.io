import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import MainPage from './pages/Main-page/Main-page'
import Registration from './pages/Registraion/Registration'
import Login from './pages/Login/Login'

import Firebase, { FirebaseContext } from './components/Firebase';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <Router>
        <Switch>
          <Route exact path="/JS_Homework">
            <MainPage />
          </Route>
          <Route exact path="/JS_Homework/Registration">
            <Registration />
          </Route>
          <Route exact path="/JS_Homework/Login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

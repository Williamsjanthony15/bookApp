import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import Login from './Login';
import MyFavoriteBooks from './MyFavoriteBooks';
import Profile from './Profile';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  render() {
    console.log('app', this.props);
    const { isAuthenticated } = this.props.auth0;
    return (
    <>
      <Login />
      <Router>
        <IsLoadingAndError>
          <Header />
          <Switch>
            <Route exact path="/">
              {isAuthenticated ? <MyFavoriteBooks /> : <Login />}
            </Route>
            <Route exact path="/Profile">
              <Profile />
            </Route>
          </Switch>
          <Footer />
        </IsLoadingAndError>
      </Router>
    </>
    );
  }
}

export default withAuth0(App);

import React from 'react';
import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
import Footer from './Footer';
import Login from './Login';
// import MyFavoriteBooks from './MyFavoriteBooks';
import BestBook from './BestBook';
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
      <Router>
        <IsLoadingAndError>
          <Header />
          <Switch>
            <Route exact path="/">
              {isAuthenticated ? <BestBook /> : <Login/>};
            </Route>
            <Route exact path="/profile">
             <Profile />
            </Route>
          </Switch>
          <Footer />
        </IsLoadingAndError>
      </Router>
      {/* <form onSubmit={this.handleFormSubmit}>
        <input type="text" onInput={this.handleEmailInput} />
        <input type="submit" />
      </form> */}
    </>
    );
  }
}

export default withAuth0(App);

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { withAuth0 } from '@auth0/auth0-react';
import Button from 'react-bootstrap/Button'
import './Header.css';


const LogoutButton = () => {
  const { logout } = useAuth0();
  return <Button variant="dark" onClick={() => logout({ returnTo: window.location.origin })}> Log Out </Button>
};

class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        {isAuthenticated ? <LogoutButton /> : ''}
      </Navbar>
    );
  }
}

export default withAuth0(Header);

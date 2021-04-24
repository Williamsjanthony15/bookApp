import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import './Login.css';
import { useAuth0 } from "@auth0/auth0-react";
import { withAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <Button variant="dark" onClick={() => loginWithRedirect()}>Sign in!</Button>;
};

class Login extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (
      <>
        <Card>
          <Card.Body>
            <Card.Title>Welcome</Card.Title>
          </Card.Body>
          { isAuthenticated ? '' : <LoginButton />}
        </Card>
      </>
    )
  }
}

export default withAuth0(Login);

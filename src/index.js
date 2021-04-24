import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

// TODO: wrap everything in Auth0

ReactDOM.render(
  <Auth0Provider 
    domain="dev-fb0m2j2w.us.auth0.com"
    clientId="9JyXbJ5IFKnPJ00JY9i73yY3mTWFDMdv"
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
    document.getElementById("root")
);

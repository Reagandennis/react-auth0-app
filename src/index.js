import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import { AuthProvider } from './auth/AuthContext';

const domain = "dev-gunuewmlia26r0vh.us.auth0.com";
const clientId = "CdvhqN1NM98oa3EHvraOOwN9rjNePzvL";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
    document.getElementById('root')
);
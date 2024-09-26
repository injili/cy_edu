
import App from './App.jsx'
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain='dev-zey0zt7u7rr7pspk.us.auth0.com'
  clientId='fsxoTAcQYut5VMbcZyKoCRghH8dAVUXi'
  authorizationParams={{ redirect_uri: window.location.origin }}>
  <App />
</Auth0Provider>
);
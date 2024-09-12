import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './assets/app.css';
import UserProvider from './Contexts/UserContext.jsx';
import PostProvider from './Contexts/PostContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </PostProvider>
  </StrictMode>
);

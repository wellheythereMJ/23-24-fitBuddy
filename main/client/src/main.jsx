import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ApolloProvider from './ApolloProvider';
import App from './App.jsx';
import Welcome from './pages/Welcome';
import Profile from './pages/Profile';
import Login from './pages/Lg2';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Settings from './pages/Settings';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Welcome />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'signup',
        element: <Signup />
      },
      {
        path: 'profile/:username',
        element: <Profile />
      },
      {
        path: 'dashboard/:username',
        element: <Dashboard />
      },
      {
        path: 'settings/:username',
        element: <Settings />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider>
    <RouterProvider router={router} />
  </ApolloProvider>
);

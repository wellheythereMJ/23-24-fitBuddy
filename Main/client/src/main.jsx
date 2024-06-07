import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ApolloProvider from './ApolloProvider';
import App from './App.jsx';
import Welcome from './pages/Welcome';
import Profile from './pages/Profile';
import Login from './pages/Lg2';
import Signup from './pages/Su2';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound'

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider>
    <RouterProvider router={router} />
  </ApolloProvider>
);

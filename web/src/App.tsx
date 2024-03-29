import React from 'react';
import logo from './logo.svg';
import './App.sass';
import Login from './Pages/Login/Login';
import { useAuth0 } from '@auth0/auth0-react';
import Main from './Pages/Main/Main';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './Routes/PrivateRoute/PrivateRoute';

function App() {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return <PrivateRoute><Main /></PrivateRoute>
  }


  return (
    <Login />
  )
}

export default App;

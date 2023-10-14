import React from 'react';
import { MenuAppBar as Navigation } from './Components/Navigation';
import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Router from './Router';
// import Navigation from './Components/Navigation'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

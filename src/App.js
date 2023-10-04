import logo from './logo.svg';
import './App.css';
import Register from './Components/Register';
import Login from './Components/Login';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

function App() {
  return (
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  );
}

export default App;
